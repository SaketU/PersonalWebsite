import React, { useState } from 'react';
import { projects } from "../constants";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleToggle = (projectId) => {
    setOpenModal(projectId === openModal ? null : projectId);
  };

  return (
    <section id="projects" className="my-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-10">
          <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] leading-[45px] sm:leading-[65px] md:leading-[75px] lg:leading-[100.8px]">
            <span className="text-gradient">Projects</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleToggle(project.id)}
                className="relative border rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  alt={project.title}
                  src={project.image}
                  className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
                />
                <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="text-center text-white p-2">
                    <h5 className="text-lg font-bold">{project.title}</h5>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 ${
              openModal === project.id ? '' : 'hidden'
            }`}
          >
            <div className="bg-white rounded-lg p-4 max-w-md w-full">
              <img
                className="object-cover rounded-lg mb-4 mx-auto"
                src={project.image}
                alt={project.title}
                style={{ width: '100%', maxHeight: '200px' }}
              />
              <div className="description-box">
                <h4 className="text-xl font-bold">{project.modalContent.title}</h4>
                <p className="py-4">{project.modalContent.description}</p>
                <span className="categories text-gray-600 flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{project.modalContent.categories}</span>
                </span>
              </div>
              <div className="link-box mt-4 flex justify-between">
                <a
                  href={project.modalContent.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Details
                </a>
                <button
                  onClick={() => handleToggle(project.id)}
                  className="text-red-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
