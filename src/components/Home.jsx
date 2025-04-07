import React from 'react'
import LetterGlitch from './HyperSpeed';
import Hero from './Hero';


const Home = () => {
  return (
    <div className='relative h-1/2 w-screen bg-black'>
 <LetterGlitch
  glitchSpeed={70}
  centerVignette={false}
  outerVignette={true}
  smooth={true}
/> 
<Hero />



</div>
  )
}

export default Home;