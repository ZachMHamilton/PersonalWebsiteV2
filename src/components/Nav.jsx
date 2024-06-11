import { Link, useLocation } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <nav className="fixed top-0 w-full bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex gap-8">
            <Link
              to="/"
              className={`flex items-center text-xl font-bold ${
                currentPage === '/'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className={`flex items-center text-xl font-bold ${
                currentPage === '/about'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
            >
              About
            </Link> */}
            <Link
              to="/portfolio"
              className={`flex items-center text-xl font-bold ${
                currentPage === '/portfolio'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className={`flex items-center text-xl font-bold ${
                currentPage === '/contact'
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
            >
              Contact
            </Link>
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
