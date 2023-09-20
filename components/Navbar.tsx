"use client";
import React, { useState, useEffect } from "react";
import { styles } from "../utils/style";
import Link from "next/link";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import Logo from "./Logo";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 
                  ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("/");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <Logo />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Sahil
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <Link
              href={`#${link.id}`}
              className={`${
                active === link.id ? "text-purple-800 font-bold" : "text-white"
              }`}
              onClick={() => {
                setActive(link.id);
              }}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  href={`#${link.id}`}
                  className={`${
                    active === link.id
                      ? "text-purple-800 font-bold"
                      : "text-white"
                  }`}
                  onClick={() => {
                    setActive(link.id);
                    setToggle(!toggle);
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
