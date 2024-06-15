import {
  Home,
  Experience,
  Portfolio,
  Contact,
  Nav,
  Skills,
} from './components/';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [current, setCurrent] = useState('home');
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) {
      setCurrent('home');
    } else if (experienceInView) {
      setCurrent('experience');
    } else if (portfolioInView) {
      setCurrent('portfolio');
    } else if (contactInView) {
      setCurrent('contact');
    }
  }, [homeInView, experienceInView, portfolioInView, contactInView]);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="flex flex-col gap-2">
      <Nav current={current} />
      <section ref={homeRef}>
        <Home current={current} />
      </section>
      <section>
        <Skills />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
