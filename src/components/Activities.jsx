import React from 'react';
import styles from '../style';
import { activitiesData } from '../constants';

const Activities = () => {
  return (
    <section id="activities" className={`${styles.paddingX} my-10`}>
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] leading-[45px] sm:leading-[65px] md:leading-[75px] lg:leading-[100.8px]">
          <span className="text-gradient">Activities</span>
        </h1>
        <div className="text-white text-base sm:text-lg md:text-xl">
          <h2 className="text-lg md:text-xl mb-6">
            My extracurricular activities and leadership positions.
          </h2>
          <div className="text-white">
            {activitiesData.map((activity, index) => (
              <div key={index} className="mb-6">
                <h2 className="font-bold text-yellow-400 text-lg sm:text-xl md:text-2xl">
                  {activity.title}
                </h2>
                <h3 className="text-slate-400 text-sm sm:text-base md:text-lg mb-2">
                  {activity.organization}
                </h3>
                <ul className="list-disc flex flex-col items-center text-sm sm:text-base md:text-lg mb-6 mx-auto max-w-2xl">
                  {activity.details.map((detail, i) => (
                    <li key={i} className="pl-1 text-center">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
