import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function BrainParticles() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="neon-particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#0f0f1c",
        },
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              area: 800,
            },
          },
          move: {
            enable: true,
            speed: 3,
            random: true, 
            outModes: {
              default: "out",
            },
          },
          shape: {
            type: "image",
            image: [
              {
                src: "/icons/brain.png",
                width: 40,
                height: 40,
              },
              {
                src: "/icons/gear.png",
                width: 40,
                height: 40,
              },
              {
                src: "/icons/idea.png",
                width: 40,
                height: 40,
              },
            ],
          },
          size: {
            value: {
              min: 25,
              max: 40,
            },
          },
          opacity: {
            value: 0.9,
          },
        },
      }}
    />
  );
}
