import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 5, 20], fov: 20 }}>
      <color attach="background" args={["#171720"]}/>
      <Experience/>
    </Canvas>
  )
}

export default App
