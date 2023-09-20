import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = (props: { text: string }) => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".revealUp").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="section">
        <h1 className="revealUp text-center text-2xl sm:text-4xl">{props.text}</h1>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
