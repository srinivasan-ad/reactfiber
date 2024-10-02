'use client'
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// Astronaut component to load and render the 3D model
export default function Astronaut() {
  // Load the model with useGLTF hook. Make sure to use the correct path
  const gltf = useGLTF('/astronaut/scene.gltf'); // Adjust the path if needed
  const ref = useRef();

  // Animation for the astronaut (floating/rotating)
  useFrame(() => {
    ref.current.rotation.y += 0.01; // Simple rotation effect
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, -0.5, -2]} // Adjust the position as per your scene
      scale={0.5} // Adjust the scale as per your preference
    />
  );
}
