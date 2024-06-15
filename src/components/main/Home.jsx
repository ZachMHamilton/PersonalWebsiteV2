import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useFadeInOnInView } from '../../utils/useFadeInOnView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';

const Home = ({ current }) => {
  const { ref, controls } = useFadeInOnInView(0.1);
  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShow(false);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn('up', 'spring', 0, 2)}
    >
      <div
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Zach <span className="text-accent">Hamilton</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mt-4">Software Engineer</h2>
          <div className="flex gap-4 mt-8 justify-center">
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="bg-primary hover:bg-accent text-white py-2 px-4 rounded cursor-pointer"
            >
              Check Out My Work
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-primary hidden md:block hover:bg-accent text-white py-2 px-4 rounded cursor-pointer"
            >
              Get in Touch
            </ScrollLink>
          </div>
        </div>
        <div
          className={`absolute bottom-2 flex flex-col items-center ${
            current == 'home' ? '' : 'fade-out'
          }`}
        >
          <p>Scroll</p>
          <ExpandMoreIcon color="white" fontSize="large" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
