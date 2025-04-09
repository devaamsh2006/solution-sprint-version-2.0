import React from 'react';
import {
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaGamepad,
  FaPalette,
  FaPlane,
  FaRegLightbulb
} from 'react-icons/fa';

const domains = [
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaHeartbeat />, title: 'Health Care' },
  { icon: <FaLeaf />, title: 'Sustainability' },
  { icon: <FaGamepad />, title: 'Gamification' },
  { icon: <FaPalette />, title: 'Arts & Entertainment' },
  { icon: <FaPlane />, title: 'Travel' },
  { icon: <FaRegLightbulb />, title: 'Open Innovation' }
];

function Domain() {
  return (
    <div className="min-h-screen px-8 py-16 text-white text-center">
      <div className="p-3 backdrop-blur-md mb-12 bg-transparent">
        <h1 className="text-4xl font-bold text-shadow-sm">Explore Our Domains</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {domains.map((domain, index) => (
          <div
            key={index}
            className={`backdrop-blur-md flex flex-col items-center bg-transparent border border-white/10 py-10 px-2 rounded-2xl shadow-lg w-2/3 max-w-sm transform transition-transform hover:scale-105
              ${index === domains.length - 1 ? 'lg:col-start-2' : ''}`}
          >
            <div className="text-4xl mb-4">{domain.icon}</div>
            <h2 className="text-xl font-semibold">{domain.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Domain;
