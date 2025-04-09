import React, { useState, useEffect } from 'react'
import BlurText from './DecryptedText'
import '../App.css';

const Hero = () => {
  
  return (
    <div className='flex flex-col gap-4 items-center justify-center absolute top-1/4 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-transparent rounded-xl p-4 sm:p-6 md:p-12 border-2 border-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
      <BlurText
        text="SOLUTION SPRINT 2.0"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 font-bold text-white heading text-center"
      />

      <BlurText
        text="   INNOVATE   COMPETE   CONQUER"
        delay={300}
        animateBy="words"
        direction="top"
        className="text-xs sm:text-lg mb-4 sm:mb-6 md:mb-8 text-white heading text-center"
      />

      <a href='https://unstop.com/o/fvwXqnL?utm_medium=Share&utm_source=shortUrl' className='opacity-1 animate-bounce p-2 sm:p-3 rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-sm sm:text-base font-medium hover:scale-105 transition-transform'>
        Register Now
      </a>
  
    </div>
  )
}

export default Hero