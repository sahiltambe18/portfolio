"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../public/pr_lg.jpg";
import Pr_dark from "../public/pr-d.jpeg";
import { GrMail } from "react-icons/gr";
import { useTheme } from "next-themes";
import { resumeDoc } from "../constants";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsCloudDownload,
} from "react-icons/bs";
import Toggle from "./Toggle";
import Link from "next/link";

const Sidebar = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`p-7 dark-bg bg-white sm:col-span-3 relative flex flex-col duration-700 justify-center items-center rounded-xl`}
    >
      <button
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        <Toggle />
      </button>

      {resolvedTheme === "dark" ? (
        <Image
          src={Profile}
          alt="profile"
          className="rounded-full max-w-[10rem] shadow-xl"
        />
      ) : (
        <Image
          src={Pr_dark}
          alt="profile"
          className="rounded-full max-w-[10rem] shadow-xl"
        />
      )}

      <h1 className="text-5xl pt-4 font-semibold font-Caveat pb-10">Sahil</h1>
      <h2 className="btn dbtn">Web Developer</h2>
      <a
        href={resumeDoc}
        download={resumeDoc}
        className="flex items-center btn dbtn "
      >
        <BsCloudDownload className="w-18 mr-2" /> Resume
      </a>
      <Link href={"mailto:sahiltambe81922@gmail.com"}>
        <h2 className=" btn dbtn  flex items-center gap-2">
          <GrMail className="w-18" /> Contact me :)
        </h2>
      </Link>
      <div className="flex justify-between">
        <Link href="https://github.com/sahiltambe18/" target={"_blank"}>
          <BsGithub className="links" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sahil-tambe-77b181230/"
          target={"_blank"}
        >
          <BsLinkedin className="links text-blue-600" />
        </Link>
        <Link href="https://instagram.com/sahil_tambe_96k_/" target={"_blank"}>
          <BsInstagram className="links text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
