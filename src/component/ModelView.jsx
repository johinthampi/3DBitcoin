import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Lights from './Lights';
import Loader from './Loader';
import Coin from './Coin';

function ModelView() {
  const numberOfCoins = 10; // Number of coins in the formation
  const formationRadius = 4; // Radius of the large circle formation
  
  // Calculate positions in a circle
  const coinPositions = Array.from({ length: numberOfCoins }, (_, index) => {
    const angle = (index / numberOfCoins) * Math.PI * 2;
    return [
      formationRadius * Math.cos(angle),  // X position
      formationRadius * Math.sin(angle),  // Y position
      0                                   // Z position
    ];
  });

  return (
   
    <Canvas>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={[-1, -4, 6]} />

      {/* Additional Lights */}
      <Lights />

      {/* 3D Models with Framer Motion Animations */}
      <Suspense fallback={<Loader />}>
  <group position={[0, -5, 0]}> {/* Shift scene down */}
    {Array.from({ length: numberOfCoins }, (_, index) => {
      const angleOffset = (index / numberOfCoins) * Math.PI * 2; // Spread coins evenly in a circle
      return (
        <Coin
          key={`coin-${index}`}
          formationRadius={formationRadius}
          angleOffset={angleOffset}
        />
      );
    })}
  </group>
</Suspense>

      {/* Controls */}
      <OrbitControls enableZoom={false}/>
      </Canvas>
  );
}

export default ModelView;