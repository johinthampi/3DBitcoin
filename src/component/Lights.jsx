import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={1}
            position={[-1, 0, -10]}
            scale={10}
            color="#495057"
            attenuation={1}  // Controls how the light diminishes with distance
          />

          <Lightformer
            form="rect"
            intensity={1}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
            attenuation={1}
          />

          <Lightformer
            form="rect"
            intensity={1}
            position={[10, 0, 1]}
            scale={5}
            rotation-y={Math.PI / 2}
            attenuation={1}
          />

          <Lightformer
            form="rect"
            intensity={1}
            position={[3, 0, 5]}
            scale={5}
            rotation-y={Math.PI / 2}
            attenuation={1}
          />

          <Lightformer
            form="rect"
            intensity={1}
            position={[-4, 0, 5]}
            scale={5}
            rotation-y={Math.PI / 2}
            attenuation={1}
          />

          <Lightformer
            form="rect"
            intensity={1}
            position={[0, 0, -15]} // Position at the back (negative Z)
            scale={10}
            color="#a29bfe"
            attenuation={1}
          />
        </group>
      </Environment>

      {/* Existing Spotlights */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
        castShadow // Enable shadow casting on spotLight
        shadow-mapSize-width={1024} // Shadow resolution
        shadow-mapSize-height={1024} // Shadow resolution
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
        castShadow // Enable shadow casting on spotLight
        shadow-mapSize-width={1024} // Shadow resolution
        shadow-mapSize-height={1024} // Shadow resolution
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
        castShadow // Enable shadow casting on spotLight
        shadow-mapSize-width={1024} // Shadow resolution
        shadow-mapSize-height={1024} // Shadow resolution
      />
    </group>
  );
};

export default Lights;