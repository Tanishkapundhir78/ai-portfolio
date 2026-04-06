import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// 🤖 Robot
function Robot({ scrollProgress, mouse }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Scroll push
    ref.current.position.y = scrollProgress * 3;

    // Mouse interaction
    ref.current.rotation.y += (mouse.x * 0.5 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-mouse.y * 0.3 - ref.current.rotation.x) * 0.05;
  });

  return <primitive ref={ref} object={scene} scale={1.5} />;
}

// 🔲 CUSTOM GRID (REAL DEPTH)
function DeepGrid({ mouse }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Mouse tilt
    ref.current.rotation.x = -Math.PI / 2.5 + mouse.y * 0.15;
    ref.current.rotation.y = mouse.x * 0.15;
  });

  return (
    <gridHelper
      ref={ref}
      args={[50, 50, "#888", "#444"]}
      position={[0, -2, 0]}
    />
  );
}

const ThreeScene = ({ scrollProgress, mouse }) => {
  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 55 }}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* 🌫️ Fog for depth */}
      <fog attach="fog" args={["#000000", 5, 20]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Environment preset="city" />

      {/* 🔲 Deep Grid */}
      <DeepGrid mouse={mouse} />

      {/* 🤖 Robot */}
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
          <Robot scrollProgress={scrollProgress} mouse={mouse} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;