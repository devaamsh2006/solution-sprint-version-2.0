import React, { useState, useEffect } from 'react'
import BlurText from './DecryptedText'
import '../App.css';

const Hero = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Set a timeout to show the button after 2 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000); // 2000ms = 2 seconds
    
    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  
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

      {showButton && (
        <button className='opacity-1 animate-bounce p-3 rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500'>
          Register Now
        </button>
      )}
    </div>
  )
}

export default Hero