import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID FLOOR
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 2.6 + scrollProgress * 0.15;
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#666", "#222"]}
      position={[0, -2, 0]}
    />
  );
}

// 🤖 ROBOT (VISIBLE + CENTER TOP)
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // ✅ Always visible (center-top)
    ref.current.position.set(0, 2.8, 0);

    // 🔥 Fast flip at start
    if (scrollProgress < 0.15) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 6);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <primitive ref={ref} object={scene} scale={1.4} />
    </Float>
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
      {/* 🌫️ Fog */}
      <fog attach="fog" args={["#000000", 6, 20]} />

      {/* 💡 Lighting */}
      <ambientLight intensity={0.5} />

      {/* Spotlight (MAIN EFFECT) */}
      <spotLight
        position={[0, 8, 5]}
        angle={0.4}
        intensity={2}
        penumbra={1}
      />

      {/* Soft fill light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      {/* Grid */}
      <FloorGrid scrollProgress={scrollProgress} />

      {/* Robot */}
      <Suspense fallback={null}>
        <Robot scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;