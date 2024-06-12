import { skills } from '../../data/skillsData';
import SkillItem from '../sub/SkillItem';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <div className="flex flex-wrap justify-center mt-4 gap-10">
        {skills.map((image, index) => (
          <SkillItem
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
