"use client";
import { Project } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsRocketTakeoff } from "react-icons/bs";


const ProjectCard = ({ project }: { project: Project }) => {
  const [showDetail, setShowDetail] = useState(false);

  return !showDetail ? (
    <div className="flex flex-col items-center gap-2 dark:bg-slate-600 p-5 bg-slate-200 rounded-lg hover:scale-125 hover:border duration-1000 ">
      <Image
        src={project.image_path}
        alt={project.name}
        className="cursor-pointer rounded-lg"
        onClick={() => setShowDetail(true)}
        width={300}
        height={150}
      />
      <p>{project.name}</p>
    </div>
  ) : (
    <div className="dark:bg-slate-600  bg-slate-200 relative duration-1000  p-5 flex flex-col items-center gap-3 rounded-lg">
      <button className="border border-red-500 text-red-600 rounded-full px-2 absolute right-1 top-1 " onClick={()=>{setShowDetail(false)}} >X</button>
      <Image
        src={project.image_path}
        alt={project.name}
        className="cursor-pointer rounded-lg"
        onClick={() => setShowDetail(false)}
        width={300}
        height={150}
      />
      <p className="text-xs" >{project.description}</p>
      <div className="text-xs flex gap-2" >{project.key_techs.map( tech => <p key={tech}>{tech}</p>)}</div>
      <div className="flex gap-9">
        <Link href={project.github_url} className="btn dbtn flex gap-2 items-center" target={'_blank'} ><BsGithub/> Github</Link>
        {project.deployed_url!=='NA' && <Link href={project.deployed_url} className="btn dbtn flex gap-2 items-center" target={"_blank"} ><BsRocketTakeoff/> Live</Link>}
      </div>
    </div>
  );
};

export default ProjectCard;
