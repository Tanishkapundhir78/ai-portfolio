import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID (SAFE VERSION)
function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x = -Math.PI / 2.8 + scrollProgress * 0.25;
  });

  return (
    <>
      {/* Main grid */}
      <gridHelper
        ref={ref}
        args={[60, 60, "#555", "#333"]}
        position={[0, -2, 0]}
      />

      {/* 🔥 Overlay plane to hide center cross */}
      <mesh position={[0, -1.99, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </>
  );
}

// 🤖 ROBOT (LEFT + FAST FLIP)
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Position LEFT of name
    ref.current.position.set(-3.5, 2.5, -1);

    // Fast flip at start
    if (scrollProgress < 0.2) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 5);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.2} />;
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
      {/* Fog */}
      <fog attach="fog" args={["#000000", 5, 25]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

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