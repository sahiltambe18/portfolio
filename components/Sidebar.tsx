import React from "react";
import Image from "next/image";
import Profile from "../public/pr_lg.jpg";
import { GrMail } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Sidebar = () => {
  
  return (
    <div className="p-7  bg-white sm:col-span-3 flex flex-col  justify-center items-center rounded-xl">
      <Image
        src={Profile}
        alt="profile"
        className="rounded-full max-w-[10rem] shadow-xl"
      />
      
      <h1 className="text-3xl pt-4 font-semibold font-Caveat pb-10">Sahil</h1>
      <h2 className="btn">Web Developer</h2>
      <a href="#" className="flex items-center btn ">
        {" "}
        <RiPagesLine className="w-18 mr-2" /> Resume
      </a>
      <h2 className="btn  flex items-center gap-2">
        {" "}
        <GrMail className="w-18" /> Contact me :){" "}
      </h2>
      <div className="flex gap-12">
        <a href="#">
          <BsGithub className="links" />
        </a>
        <a href="#">
          <BsLinkedin className="links text-blue-600" />
        </a>
        <a href="#">
          <BsInstagram className="links text-red-600" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
