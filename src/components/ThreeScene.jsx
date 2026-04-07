import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID FLOOR
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // tilt for 3D feel
    ref.current.rotation.x = -Math.PI / 2.6 + scrollProgress * 0.15;

    // ✅ make grid subtle
    ref.current.material.opacity = 0.25;
    ref.current.material.transparent = true;
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#2a2a2a", "#696060"]} // soft colors
      position={[0, -2, 0]}
    />
  );
}

// 🤖 ROBOT (FIXED POSITION + SMOOTH FLIP)
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // ✅ PERFECT POSITION (visible above text)
    ref.current.position.set(0, 2.2, 0);

    // 🔥 Smooth flip animation
    if (scrollProgress < 0.2) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 3);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.6}>
      <primitive ref={ref} object={scene} scale={1.3} />
    </Float>
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 3, 9], fov: 50 }}>
      {/* Fog */}
      <fog attach="fog" args={["#000000", 6, 20]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 8, 5]} angle={0.4} intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <FloorGrid scrollProgress={scrollProgress} />

      <Suspense fallback={null}>
        <Robot scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;