import { useState } from 'react';
import experienceData from '../data/experienceData';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useFadeInOnInView } from '../utils/useFadeInOnView';

const Experience = () => {
  const { ref: headerRef, controls: headerControls } = useFadeInOnInView(0.1);
  const [selectedExperience, setSelectedExperience] = useState(
    experienceData[0]
  );

  return (
    <motion.div
      ref={headerRef}
      animate={headerControls}
      initial="hidden"
      variants={fadeIn('up', 'spring', 0, 2)}
    >
      <div
        id="experience"
        className="flex flex-col items-center gap-8 xtra:gap-16 p-8 md:p-12 lg:p-24"
      >
        <div className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Experience
        </div>
        <div className="flex flex-col items-start justify-start gap-12 hidden xtra:block w-full">
          <div className="flex items-end">
            <span className="text-accent text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Languages&nbsp;
            </span>
            <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
              &nbsp; JavaScript | TypeScript | Java | SQL
            </p>
          </div>
          <div className="flex items-end">
            <span className="text-accent text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Technologies&nbsp;
            </span>
            <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
              &nbsp; React | Node | Express | AWS SDK | PostgreSQL | MongoDB |
              Redux | Git | Jest | HTML | CSS | JWT | Heroku
            </p>
          </div>
        </div>
        {/* Experience section starts here */}
        <div className="flex flex-col items-center justify-center gap-24 w-full h-full">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-16">
            <div className="flex flex-col gap-8 w-full lg:w-2/5">
              {experienceData.map((experience, index) => (
                <div
                  key={index}
                  className={'cursor-pointer rounded-md'}
                  onClick={() => setSelectedExperience(experience)}
                >
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl ${
                      selectedExperience === experience
                        ? 'text-accent'
                        : 'text-gray-700'
                    }`}
                  >
                    {experience.title}
                  </h3>
                  <div>
                    <p
                      className={`text-sm sm:text-base md:text-lg ${
                        selectedExperience === experience
                          ? 'text-white'
                          : 'text-gray-700'
                      }`}
                    >
                      {experience.company}
                    </p>
                    <p
                      className={`text-sm hidden sm:block sm:text-base md:text-lg ${
                        selectedExperience === experience
                          ? 'text-white'
                          : 'text-gray-700'
                      }`}
                    >
                      {experience.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-2/5 hidden lg:block">
              <div>
                <h2 className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {selectedExperience.title}
                </h2>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl">
                  {selectedExperience.company}
                </h3>
              </div>
              <ul className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl list-disc pl-6 mt-4">
                {selectedExperience.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
