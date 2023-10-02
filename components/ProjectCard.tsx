"use client";
import { Project } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { TbMedicalCrossFilled } from "react-icons/tb";

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
      <div className="flex gap-9">
        <Link href={project.github_url} target={'_blank'} ><button className="btn dbtn" >GitHub</button></Link>
        {project.deployed_url!=='NA' && <Link href={project.deployed_url} target={"_blank"} ><button className="btn dbtn" >Live</button></Link>}
      </div>
    </div>
  );
};

export default ProjectCard;
