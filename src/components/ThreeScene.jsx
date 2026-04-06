import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🤖 Robot Component
function Robot({ scrollProgress, mouse }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // 🎯 Scroll push
    ref.current.position.y = scrollProgress * 3;

    // 🖱️ Mouse interaction (smooth follow)
    ref.current.rotation.y += (mouse.x * 0.5 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-mouse.y * 0.3 - ref.current.rotation.x) * 0.05;
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

// 🔲 Grid Component (interactive)
function AnimatedGrid({ mouse }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Subtle tilt based on mouse
    ref.current.rotation.x = -Math.PI / 2 + mouse.y * 0.2;
    ref.current.rotation.y = mouse.x * 0.2;
  });

  return (
    <Grid
      ref={ref}
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
  );
}

const ThreeScene = ({ scrollProgress, mouse }) => {
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
      <AnimatedGrid mouse={mouse} />

      {/* Robot */}
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
          <Robot scrollProgress={scrollProgress} mouse={mouse} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;