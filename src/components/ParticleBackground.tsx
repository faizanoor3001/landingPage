'use client'

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!isMounted) return null;

  return (
    <Particles
      className="absolute inset-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#3CB371",
          },
          links: {
            color: "#3CB371",
            distance: 90,
            enable: true,
            opacity: 0.08,
            width: 0.5,
          },
          move: {
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 250,
            },
            value: 300,
            limit: 400,
          },
          opacity: {
            value: 0.12,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.4, max: 1 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
          },
          modes: {
            connect: {
              distance: 120,
              links: {
                opacity: 0.08,
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground; 