import { useForm } from '@formspree/react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useFadeInOnInView } from '../../utils/useFadeInOnView';

const Contact = () => {
  const { ref, controls } = useFadeInOnInView(0.1);
  const [state, handleSubmit] = useForm('xoqozbro');
  let message = '';
  if (state.succeeded) {
    message = 'Thanks for reaching out!';
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn('up', 'spring', 0, 2)}
    >
      <div
        id="contact"
        className="md:flex hidden items-start gap-48 2xl:gap-60 3xl:gap-64 4xl:gap-72 w-full h-full p-8 md:p-12 lg:p-24"
      >
        <div className="flex flex-col items-start w-2/5 gap-6">
          <h1 className="text-white text-5xl lg:text-6xl">
            Let&apos;s work together!
          </h1>
          <p className="flex items-center text-white mt-4">
            <EmailIcon className="mr-2" />
            Email:&nbsp;
            <a href="mailto:zachmhamilton@outlook.com" className="text-accent">
              zachmhamilton@outlook.com
            </a>
          </p>
          <p className="flex items-center text-white mt-2">
            <LinkedInIcon className="mr-2" />
            Connect with me on&nbsp;
            <a
              href="https://www.linkedin.com/in/zach-m-hamilton/"
              className="text-accent"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center text-white mt-2">
            <GitHubIcon className="mr-2" />
            Follow my work on&nbsp;
            <a href="https://github.com/ZachMHamilton" className="text-accent">
              GitHub
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center w-2/5 gap-6">
          <div className="text-white">{message}</div>
          <form
            className="flex flex-col gap-1 items-start justify-cente mx-auto w-4/5"
            onSubmit={handleSubmit}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <input
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 h-auto w-full text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a message..."
            ></input>
            <button
              type="submit"
              className="text-white mt-4 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
