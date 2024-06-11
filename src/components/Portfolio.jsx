import EastIcon from '@mui/icons-material/East';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { fadeIn } from '../utils/motion';

const portfolioItems = [
  {
    title: 'Lambda Peeler',
    description:
      'An open-source, web-based dashboard tailored for AWS Lambda developers. It is meticulously designed to bridge the gap between managing Lambda functions and layers, simplifying AWS cloud operations. It enhances developing efficiency by allowing engineers to test their layer and function compatibilities in bulk. Currently, engineers can only test one-by-one or set up a very robust CI/CD pipeline through AWS. Our product aims to bridge the gap and give engineers an easy-to-use alternative.',
    link: 'https://lambda-peeler.onrender.com/',
    linkText: 'Website',
    imgSrc: '../src/assets/connecting.gif',
  },
  {
    title: 'Shelved',
    description:
      'A digital library app for avid readers, audiobook listeners, and e-book enjoyers. It can be hard to keep track of all the books you have read/listened to across multiple platforms. Shelved allows you to maintain a library of ALL of the books you have enjoyed. It is seamlessly integrated with the GoogleBooks API that allows users to view more information about each book, such as author, genre, and number of pages.',
    link: 'https://github.com/ZachMHamilton/Library-Project',
    linkText: 'Docs',
    imgSrc: '../src/assets/library.png',
  },
  {
    title: 'Algo Archive',
    description:
      'A web-based dashboard that allows users to track their algorithm practice in preparation for technical interviews. Users can save their algo problems with the question and their solution, as well as any notes they would like to save, such as difficulty, different strategies used, and more.',
    link: 'https://github.com/danger-noodle-42/algo-archive',
    linkText: 'Docs',
    imgSrc: '../src/assets/algo.png',
  },
];

const Portfolio = () => {
  const headerControls = useAnimation();
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start('show');
    }
  }, [headerControls, headerInView]);

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
        {/* Features section starts here */}
        <div className="flex flex-col items-center justify-center gap-24 w-full">
          {portfolioItems.map((item, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            useEffect(() => {
              if (inView) {
                controls.start('show');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeIn('up', 'spring', index * 0.2, 2)}
                className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-16"
              >
                {index % 2 === 0 && (
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
                {index % 2 !== 0 && (
                  <img
                    className="gif w-full lg:w-2/5 hidden lg:block"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
        {/* Features section ends here */}
      </div>
    </div>
  );
};

export default Portfolio;
