import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      aria-hidden="true"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0f172a" },
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#38bdf8",
            distance: 130,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            outModes: { default: "bounce" },
            speed: 0.8,
            random: false,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 90,
          },
          opacity: { value: 0.35 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3.5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}