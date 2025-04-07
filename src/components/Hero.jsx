import React from 'react'
import BlurText from './DecryptedText'
import '../App.css';
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center absolute top-1/4 left-1/4 backdrop-blur-xl bg-transparent rounded-xl p-4 border-2 border-white w-1/2 h-1/2'>
    <BlurText
  text="SOLUTION SPRINT 2.0"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-5xl mb-8 text-white heading"
    />

<BlurText
  text="     INNOVATE      COMPETE     CONQUER"
  delay={300}
  animateBy="words"
  direction="top"
  className="text-xl mb-8 text-white heading"
    />

    </div>
  )
}

export default Hero