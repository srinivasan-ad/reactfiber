'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, useGLTF } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Over from './components/Over';

export default function Page() {
  return (
    <div className="relative overflow-hidden bg-black w-[100%] h-[100%]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <Stars />
        <Astronaut />
      </Canvas>
      <Over />
    </div>
  );
}

function Stars() {
  const starsRef = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    starsRef.current.rotation.x -= delta / 10;
    starsRef.current.rotation.y -= delta / 15;
  });

  return (
    <>
      <Points
        ref={starsRef}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <OrbitControls 
        target={[0, 0, 0]} 
        enableZoom={true} 
        minDistance={1} 
        maxDistance={10} 
      />
    </>
  );
}

function Astronaut() {
  const astronautRef = useRef();
  const { scene } = useGLTF('/mercenary_astronaut/scene.gltf');
  const speedX = 0.0055;
  const speedY = 0.002;
  // const bounceFactor = 0.5;

  const velocityX = useRef(speedX);
  const velocityY = useRef(speedY);

  useFrame((state, delta) => {
    if (astronautRef.current) {
      astronautRef.current.rotation.x -= delta / 30;
      astronautRef.current.rotation.y -= delta / 35;

      astronautRef.current.position.x += velocityX.current;
      astronautRef.current.position.y += velocityY.current;

      const astronautWidth = 0.5;
      const rightEdge = (window.innerWidth / 550) - astronautWidth;
      const leftEdge = -rightEdge;

      const astronautHeight = 0.5;
      const topEdge = (window.innerHeight / 550) - astronautHeight;
      const bottomEdge = -topEdge;

      if (astronautRef.current.position.x > rightEdge || astronautRef.current.position.x < leftEdge) {
        velocityX.current = -velocityX.current;
      }

      if (astronautRef.current.position.y > topEdge || astronautRef.current.position.y < bottomEdge) {
        velocityY.current = -velocityY.current;
      }
    }
  });

  return (
    <>
    <primitive
      ref={astronautRef}
      object={scene}
 
      position={[0, -0.5, -2]}
      scale={0.5}
    />
    <OrbitControls 
    target={[0, 0, 0]} 
    enableZoom={true} 
    minDistance={1} 
    maxDistance={10} 
  />
    </>
  );
}


// Astronaut Component (inside Canvas)
// function Astronaut() {
//   const ref = useRef();
//   const { scene } = useGLTF('/astronaut/scene.gltf'); // Adjust the path to your model

//   // Animation for the astronaut (floating/rotating)
//   useFrame(() => {
//     ref.current.rotation.y += 0.01; // Simple rotation effect
//   });

//   return (
//     <primitive
//       ref={ref}
//       object={scene}
//       position={[0, -0.5, -2]} // Adjust position as needed
//       scale={0.5} // Adjust scale as needed
//     />
//   );
// }
