import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

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

// 🔲 Grid Plane (Reusable)
function GridPlane({ position, rotation }) {
  return (
    <gridHelper
      args={[40, 40, "#888", "#333"]}
      position={position}
      rotation={rotation}
    />
  );
}

// 🧊 GRID ROOM
function GridRoom({ mouse }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;

    // Whole room reacts to mouse slightly
    groupRef.current.rotation.y = mouse.x * 0.1;
    groupRef.current.rotation.x = mouse.y * 0.05;
  });

  return (
    <group ref={groupRef}>

      {/* FLOOR */}
      <GridPlane
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* BACK WALL */}
      <GridPlane
        position={[0, 0, -10]}
        rotation={[0, 0, 0]}
      />

      {/* LEFT WALL */}
      <GridPlane
        position={[-10, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* RIGHT WALL */}
      <GridPlane
        position={[10, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />

    </group>
  );
}

const ThreeScene = ({ scrollProgress, mouse }) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 55 }}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* 🌫️ Fog (depth) */}
      <fog attach="fog" args={["#000000", 5, 25]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Environment preset="city" />

      {/* 🧊 GRID ROOM */}
      <GridRoom mouse={mouse} />

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