import React from 'react';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg'
];

function StatsOfLastEvent() {
  return (
    <div className="min-h-screen px-8 py-16 text-white text-center">
      <div className="p-3 backdrop-blur-md mb-12 bg-transparent">
        <h1 className="text-4xl font-bold text-shadow-sm">Solution Sprint 2k24 Highlights</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
           Team ISTE organized <strong>"Solution Sprint"</strong>,
          an exhilarating challenge that empowered first-year students to showcase their extraordinary creativity and razor-sharp problem-solving abilities. Participants tackled diverse real-world challenges across multiple domains, demonstrating their groundbreaking ideas and ingenious solutions that left judges thoroughly impressed.
        </p>

        <div className="mt-6 text-md font-semibold">
          <p>📌 1st Sprint: <strong>100+ teams</strong> (350+ participants)</p>
          <p>🏆 Final Sprint: <strong>15 teams</strong> shortlisted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {images.map((src, index) => (
          <div key={index} className="w-80 h-52 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md border border-white/10 bg-transparent">
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => window.open(src, '_blank')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsOfLastEvent;
