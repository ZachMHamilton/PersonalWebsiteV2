import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
  const [current, setCurrent] = useState('home');

  return (
    <nav className="fixed top-0 w-full bg-transparent z-10">
      <div className="w-full px-8 md:px-12 lg:px-24">
        <div className="flex justify-between h-16">
          <div className="flex gap-8">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className={`flex items-center text-xl font-bold ${
                current === 'home'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
              onClick={() => setCurrent('home')}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className={`flex items-center text-xl font-bold ${
                current === 'experience'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
              onClick={() => setCurrent('experience')}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className={`flex items-center text-xl font-bold ${
                current === 'portfolio'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
              onClick={() => setCurrent('portfolio')}
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className={`flex items-center text-xl font-bold ${
                current === 'contact'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
              onClick={() => setCurrent('contact')}
            >
              Contact
            </ScrollLink>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-xl font-bold text-accent">Zach Hamilton</div>
            <a href="https://www.linkedin.com/in/zach-m-hamilton/">
              <LinkedInIcon className="text-white" />
            </a>
            <a href="https://github.com/ZachMHamilton">
              <GitHubIcon className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
