import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useFadeInOnInView } from '../utils/useFadeInOnView';
import portfolioData from '../data/portfolioData';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const { ref: headerRef, controls: headerControls } = useFadeInOnInView(0.1);

  return (
    <div
      id="portfolio"
      className="flex flex-col items-center text-text bg-background gap-12 xl:gap-16 p-8 md:p-12 lg:p-24"
    >
      <motion.div
        ref={headerRef}
        animate={headerControls}
        initial="hidden"
        variants={fadeIn('up', 'spring', 0, 2)}
      >
        <div className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Portfolio
        </div>
      </motion.div>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center justify-center gap-24 w-full">
          {portfolioData.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
              isImageLeft={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
