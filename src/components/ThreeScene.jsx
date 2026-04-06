import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x = -Math.PI / 2.8 + scrollProgress * 0.25;
  });

  return (
    <gridHelper
      ref={ref}
      args={[60, 60, "#888", "#333"]}
      position={[0, -2, 0]}
    />
  );
}

// 🤖 ROBOT
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.y = 3;

    if (scrollProgress < 0.2) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 5);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.2}
      position={[0, 3, -1]}
    />
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
      <fog attach="fog" args={["#000000", 5, 25]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Environment preset="city" />

      <FloorGrid scrollProgress={scrollProgress} />

      <Suspense fallback={null}>
        <Robot scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;