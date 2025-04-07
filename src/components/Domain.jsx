import React from 'react';
import {
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaGamepad,
  FaPalette,
  FaPlane
} from 'react-icons/fa';

const domains = [
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaHeartbeat />, title: 'Health Care' },
  { icon: <FaLeaf />, title: 'Sustainability' },
  { icon: <FaGamepad />, title: 'Gamification' },
  { icon: <FaPalette />, title: 'Arts & Entertainment' },
  { icon: <FaPlane />, title: 'Travel' }
];

function Domain() {
  return (
    <div className="min-h-screen px-8 py-16 text-white text-center">
      <h1 className="text-4xl font-bold mb-12 text-shadow-sm">Explore Our Domains</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg w-full max-w-sm transform transition-transform hover:scale-105"
            style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Reduced opacity from 0.2 to 0.1
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 10,
        padding: '0.75rem 2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' // Added subtle shadow
    }}
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
