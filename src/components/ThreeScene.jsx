import { Canvas } from "@react-three/fiber";
import { Grid, Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

// 🤖 Robot Model
function Robot() {
  const { scene } = useGLTF("/robot.glb");

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

const ThreeScene = ({ robotY }) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {/* Environment lighting */}
      <Environment preset="city" />

      {/* 🔲 3D GRID */}
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

      {/* 🤖 FLOATING ROBOT */}
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          <group position-y={robotY}>
            <Robot />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;