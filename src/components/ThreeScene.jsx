import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Robot() {
  const robotRef = useRef();
  const { scene } = useGLTF("/robot.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (robotRef.current) {
      // ✨ FLOATING
      robotRef.current.position.y = -0.8 + Math.sin(t * 1.2) * 0.15;

      // ✨ SLIGHT ROTATION
      robotRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={0.9}
      position={[0, -0.8, 0]}
    />
  );
}

function GridFloor() {
  const gridRef = useRef();

  return (
    <primitive
      ref={gridRef}
      object={new THREE.GridHelper(20, 40, "#ffffff", "#444444")}
      position={[0, -1.5, 0]} // 👇 below robot
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
      {/* 🌌 LIGHTING */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <pointLight position={[0, 2, 2]} intensity={1.2} />

      {/* 🔳 GRID (STABLE) */}
      <GridFloor />

      {/* 🤖 ROBOT */}
      <Robot />
    </Canvas>
  );
}