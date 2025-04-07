import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrainParticles from './components/Background'
import WhyParticipate from './components/WhyParticipate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <BrainParticles /> */}
     <WhyParticipate/>
    </>
  )
}

export default App
