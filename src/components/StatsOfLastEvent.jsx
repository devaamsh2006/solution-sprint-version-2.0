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
        <h1 className="text-4xl font-bold text-shadow-sm">Stats of Last Event</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          <strong>iste_vnrvjiet</strong> Team ISTE recently organized <strong>"Solution Sprint"</strong>,
          empowering first-year students to showcase their creativity and problem-solving skills by
          tackling diverse problem statements across various domains, demonstrating their innovative
          ideas and solutions.
        </p>

        <div className="mt-6 text-md font-semibold">
          <p>📌 1st Round: <strong>100+ teams</strong> (350+ participants)</p>
          <p>🏆 Final Round: <strong>15 teams</strong> shortlisted</p>
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
