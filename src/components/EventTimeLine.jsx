import React from "react";
import '../index.css';

const timelineData = [
  {
    date: "12th April 2025",
    title: "Round 1",
    description:
      "Venue: Online. Participants will choose a problem statement and submit a well-structured PowerPoint presentation outlining their proposed solution.",
    link: "#",
    showLink: true,
  },
  {
    date: "16th, 17th & 18th April 2025",
    title: "Round 2",
    description:
      "Venue: Online. Shortlisted teams from Round 1 will present their ideas to an expert jury panel in an online session.",
    link: "#",
    showLink: true,
  },
  {
    date: "20th April 2025",
    title: "Online Figma Session & PPT Guidelines",
    description:
      "Venue: Online. A guided session to familiarize participants with Figma for UI design and provide essential guidelines for creating impactful presentations.",
    link: "#",
    showLink: true,
  },
  {
    date: "26th April 2025",
    title: "Final Round",
    description:
      "Venue: VNRVJIET (Offline). Finalists will present their solutions in person to the jury at VNRVJIET campus.",
    link: "#",
    showLink: true,
  },
];

const EventTimeLine = () => {
  return (
    <div className="min-h-screen px-6 py-16 text-white text-center">
      <div className="p-3 backdrop-blur-md mb-12 bg-transparent">
        <h1 className="text-4xl font-bold text-shadow-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Event Timeline
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-3xl backdrop-blur-md bg-transparent border border-white/10 p-6 rounded-2xl shadow-lg">
          <div className="absolute left-14 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded"></div>
          <ol className="relative space-y-10">
            {timelineData.map((event, index) => (
              <li className="relative ps-16 animate-fade-in text-left" key={index}>
                <div className="absolute left-6 top-1 w-5 h-4 bg-white border-2 border-gray-300 rounded-full z-10 shadow-md"></div>
                <time className="mb-1 text-sm font-medium text-gray-300">
                  {event.date}
                </time>
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-300">
                  {event.description}
                </p>
                {event.showLink && (
                  <a
                    href={event.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
                  >
                    Learn more
                    <svg
                      className="w-3 h-3 ml-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EventTimeLine;
