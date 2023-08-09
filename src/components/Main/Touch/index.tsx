"use client";

import GreetingBox from "../Hero/GreetingBox";
import "../../style/customAnimation.scss";
import { useInView } from "react-intersection-observer";

const Touch = () => {
  const { ref: slapRef, inView: slapVisible } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: bounceRef, inView: bounceVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="getInTouch" className="relative -mt-60 -z-30 overflow-hidden">
      <div
        className={`bg-secondary2 bg-[url('/image/mininav.jpg')] bg-cover h-[700px] flex flex-col items-center sm:justify-center gap-y-5`}
      >
        <h2
          ref={slapRef}
          className={`${
            slapVisible ? "enterSlap" : ""
          }  text-primary2 font-Expose text-[75px] text-center pt-56 sm:pt-48  leading-none`}
        >
          Get in Touch with Me!
        </h2>
        <div ref={bounceRef} className={`${bounceVisible ? "enterBouncing" : ""}`}>
          <GreetingBox
            style="font-Optima text-xl sm:text-2xl text-justify"
            content="I'm open to help and available for freelance opportunities and collaborations worldwide!
          feel free to ask me any question, or we can start turning our craziest idea into reality together."
          />
        </div>
      </div>
    </section>
  );
};

export default Touch;
