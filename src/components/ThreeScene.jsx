import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Robot() {
  const robotRef = useRef();

  // 📦 Load GLB (make sure path is correct)
  const { scene } = useGLTF("/robot.glb");

  // 🎬 Animation loop
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (robotRef.current) {
      // ✨ FLOATING (smooth + premium)
      robotRef.current.position.y = -0.8 + Math.sin(t * 1.2) * 0.15;

      // ✨ SUBTLE ROTATION (alive feel)
      robotRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={0.9}
      position={[0, -0.8, 0]} // 🔥 lowered position
    />
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* 🌌 LIGHTING (balanced + visible robot) */}
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[2, 2, 2]}
        intensity={1.5}
      />

      <pointLight
        position={[0, 2, 2]}
        intensity={1.2}
      />

      {/* 🤖 ROBOT */}
      <Robot />
    </Canvas>
  );
}