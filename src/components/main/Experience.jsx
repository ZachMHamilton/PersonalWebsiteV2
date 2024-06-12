import { useState } from 'react';
import experienceData from '../../data/experienceData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useFadeInOnInView } from '../../utils/useFadeInOnView';

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
        className="flex flex-col h-full items-center gap-8 xtra:gap-16 p-8 md:p-12 lg:p-24"
      >
        <div className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Experience
        </div>
        {/* Experience section starts here */}
        <div className="flex flex-col items-center justify-center gap-24 w-full h-full">
          <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-4 lg:gap-16">
            <div className="flex flex-col gap-8 w-full lg:w-2/5">
              {experienceData.map((experience, index) => (
                <div
                  key={index}
                  className={'cursor-pointer rounded-md'}
                  onClick={() => setSelectedExperience(experience)}
                >
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl text-accent ${
                      selectedExperience === experience
                        ? 'sm:text-accent'
                        : 'sm:text-gray-500'
                    }`}
                  >
                    {experience.title}
                  </h3>
                  <div>
                    <p
                      className={`text-sm sm:text-base md:text-lg text-white ${
                        selectedExperience === experience
                          ? 'sm:text-white'
                          : 'sm:text-gray-500'
                      }`}
                    >
                      {experience.company}
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg text-white ${
                        selectedExperience === experience
                          ? 'sm:text-white'
                          : 'sm:text-gray-500'
                      }`}
                    >
                      {experience.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-2/5 hidden sm:block">
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
