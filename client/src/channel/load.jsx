import { Canvas, useFrame} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { OrbitControls,PerspectiveCamera,Stars} from '@react-three/drei';
import { Plane } from '@react-three/drei';

function Cube({position}) {

  const ref = useRef()


  useFrame(()=>{ 
    ref.current.rotation.x = ref.current.rotation.x += .01
    ref.current.rotation.y = ref.current.rotation.y += .01

  })

  return(
    <mesh scale={3} ref={ref} position={position}>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color='lightblue'/>       
      <Plane/>
    </mesh>
  )
}

function Load() {

  const [position,setPosition] = useState([-3,0,-4])
  const [position2,setPosition2] = useState([3,0,-4])
  useEffect(()=> {
    window.addEventListener("keydown",(e)=> {
      switch (e.key) {
        case 'a':
            setPosition(position[0]+=1)
          break
        case 'd':
          setPosition(position[0]-=1)
          break
        case 's':
          setPosition(position[1]-=1)
          break
        case 'w':
          setPosition(position[1]+=1)
          break
      }


      return () => {
        window.removeEventListener("keydown");
      }
    })
  },[]);
  return (
    <div id='canvass'style={{height:"100vh"}}>
      <Canvas>
        <Stars/>
        <PerspectiveCamera/>
        <OrbitControls/>
        <ambientLight intensity={0.5} />
        <pointLight position = {[-10,10,2]}/>
        <Cube position={position}/>
        <Cube position={position2}/>
      </Canvas> 
    </div>
  );
}


export default Load;
