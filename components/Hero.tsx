"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { styles } from "../utils/style";
import Sahil from "./Text/Sahil";
import Text from './Text/HeroScroll'

function scrollTo() {
  const about = document.querySelector("#about");
  window.scrollTo({
    top: about?.getBoundingClientRect().top,
    left: 0,
    behavior: "smooth",
  });
}

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto px-7  flex flex-row justify-center items-start gap-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col gap-6 w-56 sm:w-auto">
          <h1 className={`text-2xl sm:text-4xl text-white`}>
            Hi, I'm 
          </h1>
          <Sahil/>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            <Text text="I make user interface and web-applications" />
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href={"#about"} onClick={scrollTo}>
          <div onClick={scrollTo} className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
