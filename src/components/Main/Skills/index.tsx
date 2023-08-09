"use client";
import React, { useState } from "react";
import SkillBox from "./SkillBox";
import "../../style/customAnimation.scss";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const { ref: slapRef, inView: slapVisible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: bounceRef, inView: bounceVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="help" className="-mt-20 sm:-mt-28 md:-mt-36 lg:-mt-48 overflow-hidden">
      <div
        className={`bg-[url('/image/skills_bg.png')] w-full h-[900px] bg-cover flex flex-col justify-center items-center`}
      >
        <h2
          ref={slapRef}
          className={`font-Expose text-[75px] text-center text-primary2 ${
            slapVisible ? "enterSlap" : ""
          }`}
        >
          How I can help
        </h2>
        <div className="px-3 mt-8 pb-16">
          <div ref={bounceRef} className={`${bounceVisible ? "enterBouncing" : ""}`}>
            <SkillBox pageStatus={page} />
          </div>

          <div className="mt-5 flex justify-center md:hidden">
            <p className="font-Expose text-[60px] text-primary2 "> {page}/2 Page</p>
          </div>
          <div className={`justify-center font-Expose text-5xl text-primary2 flex mt-8 md:hidden`}>
            <button className={`${page === 1 ? "hidden" : ""} `} onClick={prevPage}>
              Previous
            </button>
            <button className={`${page === 2 ? "hidden" : ""} `} onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
