import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

// 🔲 GRID
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloorGrid({ scrollProgress }) {
  const ref = useRef();

  const grid = useMemo(() => {
    const size = 50;
    const divisions = 50;
    const step = size / divisions;

    const vertices = [];

    for (let i = -size / 2; i <= size / 2; i += step) {
      // ❌ Skip center line
      if (Math.abs(i) < 0.0001) continue;

      // Vertical lines
      vertices.push(i, 0, -size / 2, i, 0, size / 2);
      // Horizontal lines
      vertices.push(-size / 2, 0, i, size / 2, 0, i);
    }

    return new Float32Array(vertices);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x = -Math.PI / 2.8 + scrollProgress * 0.25;
  });

  return (
    <lineSegments ref={ref} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={grid.length / 3}
          array={grid}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#555" />
    </lineSegments>
  );
}

// 🤖 ROBOT
function Robot({ scrollProgress }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.y = 3;

    if (scrollProgress < 0.2) {
      ref.current.rotation.y = Math.PI * (scrollProgress * 5);
    } else {
      ref.current.rotation.y = Math.PI;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.2}
      position={[-3.5, 2.5, -1]}
    />
  );
}

const ThreeScene = ({ scrollProgress }) => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
      <fog attach="fog" args={["#000000", 5, 25]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Environment preset="city" />

      <FloorGrid scrollProgress={scrollProgress} />

      <Suspense fallback={null}>
        <Robot scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;