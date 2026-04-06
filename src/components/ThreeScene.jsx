import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🤖 Robot Component
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Smooth upward movement based on scroll
    ref.current.position.y = 0 + scrollProgress * 3;

    // Slight rotation for life
    ref.current.rotation.y += 0.005;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 5, 2]} intensity={1.2} />

      {/* Environment */}
      <Environment preset="city" />

      {/* Grid */}
      <Grid
        args={[30, 30]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#444"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#888"
        fadeDistance={40}
        fadeStrength={1}
        position={[0, -1, 0]}
      />

      {/* Robot */}
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
          <Robot scrollProgress={scrollProgress} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;