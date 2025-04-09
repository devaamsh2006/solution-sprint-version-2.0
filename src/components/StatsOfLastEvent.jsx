import React from 'react';

const images = [
  '/images/image5.jpg',
  '/images/image8.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg'
];

function StatsOfLastEvent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 py-16 text-white text-center">
      <div className="p-4 sm:p-6 md:p-8 backdrop-blur-md mb-8 sm:mb-12 md:mb-16 bg-transparent">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-shadow-sm">
          Solution Sprint 2k24 Highlights
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
          Team ISTE organized <strong>"Solution Sprint"</strong>, an exhilarating challenge that empowered first-year students to showcase their extraordinary creativity and razor-sharp problem-solving abilities. Participants tackled diverse real-world challenges across multiple domains, demonstrating their groundbreaking ideas and ingenious solutions that left judges thoroughly impressed.
        </p>

        <div className="mt-6 sm:mt-8 text-base sm:text-lg font-semibold space-y-1">
          <p>📌 1st Sprint: <strong>100+ teams</strong> (350+ participants)</p>
          <p>🏆 Final Sprint: <strong>15 teams</strong> shortlisted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 hover:shadow-white/10 transition-all duration-300"
          >
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => window.open(src, '_blank')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsOfLastEvent;
