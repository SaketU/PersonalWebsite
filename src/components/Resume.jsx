import React from 'react';
import styles from "../style";

const Resume = () => {
  const handleClick = () => {
    window.open('/SaketUpperlaResumeFinal.pdf', '_blank');
  };

  return (
    <section id="resume" className={`${styles.paddingX} my-10`}>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] text-white leading-[45px] sm:leading-[65px] md:leading-[75px] lg:leading-[100.8px]">
            <span className="text-gradient">Resume</span>
          </h1>
        </div>
        <div>
          <h2 className="text-white text-base sm:text-lg md:text-xl pb-4 mb-7 text-center">
            Learn more about my experience and skills here!
          </h2>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200 dark:focus-visible:ring-teal-700 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 text-center me-2 mb-2"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
