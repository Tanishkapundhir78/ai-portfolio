import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🤖 Robot (scroll-based only)
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Move slightly upward
    ref.current.position.y = scrollProgress * 1.5;

    // 🔄 Flip ONLY once (0 → 180°)
    ref.current.rotation.y = Math.PI * scrollProgress;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.2}
      position={[2.5, 1.2, 0]} // 👉 beside name
    />
  );
}

// 🔲 CLEAN GRID FLOOR
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Subtle scroll-based tilt (instead of mouse)
    ref.current.rotation.x = -Math.PI / 2.5 + scrollProgress * 0.2;
  });

  return (
    <gridHelper
      ref={ref}
      args={[50, 50, "#888", "#333"]}
      position={[0, -2, 0]}
    />
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 55 }}>
      {/* Depth fog */}
      <fog attach="fog" args={["#000000", 5, 25]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Environment preset="city" />

      {/* Grid */}
      <FloorGrid scrollProgress={scrollProgress} />

      {/* Robot */}
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
          <Robot scrollProgress={scrollProgress} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;