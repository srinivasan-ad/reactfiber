import Scene from "./components/Scene";




export default function Page() {
  return(
    <Scene/>
)}



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
