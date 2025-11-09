import { useForm } from '@formspree/react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useFadeInOnInView } from '../../utils/useFadeInOnView';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const { ref, controls } = useFadeInOnInView(0.1);
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm('xoqozbro');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setMessage('Thanks for reaching out!');
      const timer = setTimeout(() => formRef.current.reset(), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn('up', 'spring', 0, 2)}
    >
      <div
        id="contact"
        className="flex items-start gap-48 2xl:gap-60 3xl:gap-64 4xl:gap-72 w-full h-full p-8 md:p-12 lg:p-24"
      >
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5 gap-6">
          <h1 className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Let&apos;s work together!
          </h1>
          <p className="flex items-center text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <EmailIcon className="mr-2" />
            Email:&nbsp;
            <a
              href="mailto:zachmhamilton@outlook.com"
              target="_blank"
              className="text-accent hover:text-accent-800"
            >
              zachmhamilton@outlook.com
            </a>
          </p>
          <p className="flex items-center text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <LinkedInIcon className="mr-2" />
            Connect with me on&nbsp;
            <a
              href="https://www.linkedin.com/in/zach-m-hamilton/"
              target="_blank"
              className="text-accent hover:text-accent-800"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl ">
            <GitHubIcon className="mr-2" />
            Follow my work on&nbsp;
            <a
              href="https://github.com/ZachMHamilton"
              target="_blank"
              className="text-accent hover:text-accent-800"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center w-2/5 gap-6">
          <div className="text-white">{message}</div>
          <form
            className="flex flex-col gap-1 items-start justify-center mx-auto w-4/5"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent focus:outline-none focus:ring-0 focus:border-white peer peer-focus:dark:text-accent"
                placeholder=" "
                required
                autoComplete="off"
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent  focus:outline-none focus:rig-0 focus:border-white peer peer-focus:dark:text-accent"
                placeholder=" "
                required
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-accent appearance-none dark:text-white dark:border-accent focus:outline-none focus:ring-0 focus:border-white peer peer-focus:dark:text-accent"
                placeholder=" "
                required
                autoComplete="off"
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                id="message"
                name="message"
                rows="1"
                placeholder=" "
                className="peer block w-full py-2.5 px-0 text-white text-sm placeholder-accent bg-transparent border-0 border-b-2 border-accent rounded-none focus:outline-none focus:border-white"
                required
                autoComplete="off"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white"
              >
                Leave a message...
              </label>
            </div>

            <button
              type="submit"
              className="text-white mt-4 bg-primary hover:bg-accent-800 focus:ring-4 focus:outline-none focus:ring-accent-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
