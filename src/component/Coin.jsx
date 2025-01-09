import React, { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { useGLTF } from '@react-three/drei';

function Model({formationRadius, angleOffset }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/finalblendcoin.glb');
  const radius = 4;
  
  

  return (
    <motion.group
      ref={group}
      dispose={null}
      animate={{
        x: Array.from({ length: 100 }, (_, i) =>
          formationRadius * Math.cos((2 * Math.PI * i) / 100 + angleOffset)
        ),
        y: Array.from({ length: 100 }, (_, i) =>
          formationRadius * Math.sin((2 * Math.PI * i) / 100 + angleOffset)
        ),
        rotateY: [0, Math.PI * 2], // Spin each coin around its Y-axis
      }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
      }}
    >
      <group name="Scene">
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.gold}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1, -0.084, -1]}
        >
          <mesh
            name="Curve001"
            castShadow
            receiveShadow
            geometry={nodes.Curve001.geometry}
            material={materials['SVGMat.002']}
            position={[-0.02, -0.934, -0.015]}
            rotation={[-3.119, -0.242, -3.04]}
            scale={[-1.367, -15.963, -1.342]}
          />
          <mesh
            name="Curve003"
            castShadow
            receiveShadow
            geometry={nodes.Curve003.geometry}
            material={materials['SVGMat.002']}
            position={[0.014, -0.083, -0.058]}
            rotation={[-0.002, -0.233, 3.043]}
            scale={[1.318, 15.388, 1.294]}
          />
        </mesh>
      </group>
    </motion.group>
  );
}

export default Model;