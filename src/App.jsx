import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Bvh, Center, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
        <Bvh>
          <Center>
            <OrbitControls
              enableDamping={true}
              dampingFactor={0.2}
              autoRotate={true}
              enableZoom={false}
              autoRotateSpeed={0.5}
              // minDistance={1}
              // maxDistance={3}
            />
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model
              position={[-1.2, -1.2, 0]}
              rotation={[0, 0, 0]}
              scale={0.5}
            />
          </Center>
        </Bvh>
      </Canvas>
    </div>
  );
}

export default App;
