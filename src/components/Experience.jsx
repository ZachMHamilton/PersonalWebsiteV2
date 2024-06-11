import { useState } from 'react';

const workExperiences = [
  {
    title: 'Software Engineer',
    company: 'Linkt',
    period: "Jan. '24 - June '24",
    details: [
      'Wrote some awesome code and did awesome things so awesomly',
      'Wrote some awesome code and did awesome things so awesomly',
      'Wrote some awesome code and did awesome things so awesomly',
    ],
  },
  {
    title: 'Co-Creator & Software Engineer',
    company: 'Lambda Peeler (Open Source)',
    period: "July '23 - Jan. '24",
    details: [
      'LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA',
      'LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA',
      'LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA LAMBDA',
    ],
  },
  {
    title: 'Java Teaching Assistant',
    company: 'The Ohio State University',
    period: "Aug. '22 - Dec. '22",
    details: [
      'Go bucks! Go bucks! Go bucks! Go bucks! Go bucks! Go bucks!',
      'Go bucks! Go bucks! Go bucks! Go bucks! Go bucks! Go bucks!',
      'Go bucks! Go bucks! Go bucks! Go bucks! Go bucks! Go bucks!',
    ],
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    workExperiences[0]
  );

  return (
    <div className="flex flex-col items-center gap-12 xl:gap-16 p-8 md:p-12 lg:p-24">
      <div className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Experience
      </div>
      <div className="flex flex-col items-start justify-start gap-12 hidden xtra:block p-4 w-full">
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
      <div className="flex flex-col items-start lg:flex-row gap-40 w-full bg-background">
        <div className="flex flex-col gap-8 w-full lg:w-2/5">
          {workExperiences.map((experience, index) => (
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
              {selectedExperience.company} | {selectedExperience.period}
            </h3>
          </div>
          <ul className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl list-disc pl-6 mt-4">
            {selectedExperience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
