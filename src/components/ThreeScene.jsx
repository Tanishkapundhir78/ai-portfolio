import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x = -Math.PI / 2.8 + scrollProgress * 0.2;
  });

  return (
    <gridHelper
      ref={ref}
      args={[60, 60, "#555", "#333"]}
      position={[0, -3, 0]}
    />
  );
}

// 🤖 ROBOT (TOP CENTER + FLOAT + INTRO ANIMATION)
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Stay at top center
    ref.current.position.set(0, 4, -1);

    // 🔥 Intro flip animation (fast)
    if (scrollProgress < 0.15) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 6);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <primitive ref={ref} object={scene} scale={1.6} />
    </Float>
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 5, 11], fov: 45 }}>
      <fog attach="fog" args={["#000000", 6, 30]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.3} />

      <Environment preset="city" />

      <FloorGrid scrollProgress={scrollProgress} />

      <Suspense fallback={null}>
        <Robot scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;