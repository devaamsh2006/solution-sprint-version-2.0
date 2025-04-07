import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrainParticles from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrainParticles />
    </>
  )
}

export default App
