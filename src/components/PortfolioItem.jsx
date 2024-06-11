import EastIcon from '@mui/icons-material/East';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useFadeInOnInView } from '../utils/useFadeInOnView';

const PortfolioItem = ({ item, delay, isImageLeft }) => {
  const { ref, controls } = useFadeInOnInView(0.1);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn('up', 'spring', delay, 2)}
      className={`flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-16 ${
        isImageLeft ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {item.imgSrc && (
        <img
          className="gif w-full lg:w-2/5 hidden lg:block"
          src={item.imgSrc}
          alt={item.title}
        />
      )}
      <div className="flex flex-col gap-2 w-full lg:w-2/5">
        <h2 className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {item.title}
        </h2>
        <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {item.description}
        </p>
        <a
          href={item.link}
          className="flex items-center gap-1 text-accent text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          {item.linkText} <EastIcon className="text-accent" />
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
