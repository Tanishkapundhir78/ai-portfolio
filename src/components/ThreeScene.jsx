import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Float, Image } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
      
      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {/* 🔲 3D GRID FLOOR */}
      <Grid
        args={[20, 20]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#444"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#888"
        fadeDistance={30}
        fadeStrength={1}
      />

      {/* 🤖 FLOATING ROBOT */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Image
          url="/robo.png"
          scale={[2, 2, 1]}
          position={[0, 1.5, 0]}
        />
      </Float>

      {/* Optional controls (remove later) */}
      {/* <OrbitControls /> */}

    </Canvas>
  );
};

export default ThreeScene;