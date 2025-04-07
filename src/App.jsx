import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrainParticles from './components/Background'
import Rewards from './components/Rewards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrainParticles />
     <div className="content-wrapper">
      <Rewards/>
     </div>
    </>
  )
}

export default App
