"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pic from "../public/pr_dr.jpg";

const About = () => {
  return (
    <Fragment>
      <h1 id="about" className="text-4xl mt-4 flex justify-center">About Me</h1>
      <div className="p-4 w-auto flex flex-col sm:flex-row justify-evenly  items-center" >
        <Image
          src={pic}
          className="max-w-[10rem] max-h-[15rem] sm:max-w-sm sm:max-h-max rounded-full overflow-hidden"
          alt="profile"
        />
        <motion.p className="text-lg sm:text-xl text-gray-700 wrap max-w-4xl ">
          I'm Sahil, a third-year IT engineering student at IIIT Pune. With a
          fervor for web development, I create dynamic, user-centric digital
          experiences. Constantly exploring new technologies, I merge creativity
          with code. Beyond programming, I find balance in the gym and the pool.
          Eager to embrace the limitless possibilities of tech's future, I
          invite you to explore my work and collaborate on exciting projects.
        </motion.p>
      </div>
    </Fragment>
  );
};

export default About;
