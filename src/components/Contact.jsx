import React from 'react';
import styles from "../style";
import mail from '../assets/mail.png';
import { linkedin } from "../assets";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.paddingX} py-10`}>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] text-white leading-[45px] sm:leading-[65px] md:leading-[75px] lg:leading-[100.8px] mb-4">
          <span className="text-gradient">Contact Me</span>
        </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16">
          Feel free to reach out to me!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 mb-4">
          <div className="flex flex-col items-center text-center">
            <img src={mail} alt="mail icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2"/>
            <h2 className="text-white text-base sm:text-lg md:text-xl pb-1 sm:pb-2 pt-2">
              Email me at
            </h2>
            <h2 className="text-white text-base sm:text-lg md:text-xl">
              saketupperla7@gmail.com
            </h2>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={linkedin} alt="LinkedIn icon" className="w-8 h-8 object-contain mb-2"/>
            <h2 className="text-white text-base sm:text-lg md:text-xl pb-1 sm:pb-2 pt-2">
              Connect with me at
            </h2>
            <a href="https://www.linkedin.com/in/saket-upperla-bbb873298/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-base sm:text-lg md:text-xl underline">
              Saket's LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
