import React, { useState } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { RxQuestionMarkCircled } from "react-icons/rx";

const faqData = [
    {
      question: "What is Solution Sprint?",
      answer: "Solution Sprint is a ideathon where participants build tech-based solutions to real-world problems."
    },
    {
      question: "Who can participate?",
      answer: "Any college first year student with a passion for building and innovating is welcome to participate."
    },
    {
      question: "Is it a team event?",
      answer: "Yes, teams can have 2 to 4 members."
    },
    {
      question: "What are the prizes?",
      answer: "Winners will receive cash prizes, goodies with our partners."
    },
    {
      question: "Where will the event be held?",
      answer: "The hackathon is hybrid. The initial rounds are online, while the final round will be held on-site."
    },
    {
      question: "Still have questions?",
      answer: "Reach out to us at iste@vnrvjiet.in"
    }
  ]

function FAQ() {

    const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
    return (
        <div className='backdrop-blur-xl bg-transparent py-12 px-4 sm:px-8 md:px-16'>
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 mt-2 text-base md:text-lg">
          Got questions? We've got answers.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className='border border-[#3d4775] rounded-xl p-4 transition duration-300'
          >
            <button
              onClick={() => toggle(index)}
              className='flex items-center justify-between w-full text-left text-white font-medium text-lg'
            >
              <div className='flex items-center gap-2 text-lg font-semibold'>
                <RxQuestionMarkCircled className='text-white text-2xl font-bold' />
                {faq.question}
              </div>
              <div className='text-[#7a63e5] text-2xl font-bold'>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 font-bold text-lg" />
                ) : (
                  <ChevronDown className="w-5 h-5 font-bold text-lg" />
                )}
              </div>
            </button>
            {openIndex === index && (
              <p className='text-gray-200 mt-3 transition-opacity duration-300'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    )
}

export default FAQ
