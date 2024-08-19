import React, { Fragment } from 'react';
import { events } from "../constants";

const WorkExperience = () => {
  return (
    <section id='work-experience' className='flex flex-col items-center justify-center w-screen mb-20'>
      <div className='flex flex-col items-center justify-start w-full py-8'>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient">Work Experience</span>
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center flex-grow'>
        <div className='flex flex-col gap-y-3 items-center'>
          <Circle />
          {events.map((event, key) => {
            return (
              <Fragment key={key}>
                <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 sm:gap-x-4 md:gap-x-6 items-center mx-auto'>
                  <EventCard heading={event.heading} date={event.date} />
                  <Pillar />
                  <Description subHeading={event.subHeading} description={event.description} />
                </div>
                {key < (events.length - 1) && <Circle />}
              </Fragment>
            );
          })}
          <Circle />
        </div>
      </div>
    </section>
  );
};

const Circle = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 mx-auto'>
    </div>
  );
}

const Pillar = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full mx-auto'>
    </div>
  );
}

const EventCard = ({ heading, date }) => {
  return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 justify-center border shadow-md rounded-xl p-4 w-48 sm:w-60 lg:w-90 justify-self-end overflow-hidden'>
      <div className='font-bold text-lg text-yellow-400'>{heading}</div>
      <div className='text-sm text-white'>{date}</div>
    </div>
  );
}

const Description = ({ subHeading, description }) => {
  return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 justify-center border shadow-md rounded-xl p-4 w-120 sm:w-96 xs:w-full justify-self-endmax-w-lg overflow-hidden'>
      <div className='font-bold text-lg text-orange-400'>{subHeading}</div>
      <div className='text-sm text-white'>{description}</div>
    </div>
  )
}

export default WorkExperience;
