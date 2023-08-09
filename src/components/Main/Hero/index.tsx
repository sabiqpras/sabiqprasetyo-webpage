"use client";
import React, { useEffect } from "react";
import "./hero.scss";
import Profile from "./Profile";
import GreetingBox from "./GreetingBox";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden">
      <div
        className={`bg-[url('/image/city-light.jpg')] dark:bg-[url('/image/city-red.jpg')] w-full h-screen bg-cover bg-center`}
      >
        <div className="flex  flex-col lg:flex-row h-full w-full items-center justify-center lg:px-20">
          <Profile />
          <GreetingBox
            style="font-Optima text-3xl "
            content="Sabiq Prasetyo is a web developer who passionate about pixel perfect, beautiful interfaces,
              and clean code."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
