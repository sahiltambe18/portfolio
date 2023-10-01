'use client'
import { Project } from '@/constants'
import Image from 'next/image'
import { useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { TbMedicalCrossFilled } from 'react-icons/tb';

const ProjectCard = ({project}:{project:Project}) => {
  
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      {/* <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      /> */}
      <img
        src={project.github_url}
        alt={project.name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{project.name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={project.image_path}
              alt={project.name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={project.github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={project.deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{project.name}</h2>
            <h3 className="mb-3 font-medium">{project.description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {project.key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <TbMedicalCrossFilled size={30} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCard
