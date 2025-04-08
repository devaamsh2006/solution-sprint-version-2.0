
import React from 'react';
import { FaRupeeSign, FaGift, FaBuilding, FaGlobe, FaRocket } from 'react-icons/fa';
import { LuTarget } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";

const cards = [
    {
        title: 'Huge Cash Prizes',
        description: 'Win massive rewards worth ₹5 Lakh across multiple categories.',
        icon: <FaRupeeSign size={24} />,
        bg: 'bg-green-500',
    },
    {
        title: 'Tons of Swags',
        description: 'Limited edition merchandise for top performers.',
        icon: <FaGift size={24} />,
        bg: 'bg-purple-500',
    },
    {
        title: 'Boost Your Portfolio',
        description: 'Showcase your skills and stand out to potential employers.',
        icon: <FaBuilding size={24} />,
        bg: 'bg-yellow-500',
    },
    {
        title: 'Network & Collaborate',
        description: 'Connect with like-minded innovators and potential collaborators.',
        icon: <FaGlobe size={24} />,
        bg: 'bg-blue-500',
    },
    {
        title: 'Learn from Mentors',
        description: 'Get guidance from industry experts and seasoned professionals.',
        icon: <HiOutlineLightBulb size={24} />,
        bg: 'bg-pink-500',
    },
    {
        title: 'Solve Real-World Challenges',
        description: 'Apply your skills to meaningful problems with tangible impact.',
        icon: <LuTarget size={24} />,
        bg: 'bg-red-500',
    },
];

const WhyParticipate = () => {
    return (
        <section
  className="text-white py-20 px-4 backdrop-blur-md bg-transparent shadow-md"
  style={{
    zIndex: 10
  }}
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-400 mb-4">Why Participate?</h2>
    <p className="text-lg text-gray-300 mb-12">
      Unleash your potential, connect with innovators, and win exciting rewards.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`rounded-2xl p-6 backdrop=blur-xl bg-transparent shadow-slate-400 text-white shadow-md transition-transform hover:scale-105 duration-300`}
        >
          <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center shadow-md mx-auto">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-white/80">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export default WhyParticipate;