"use client";
import React from "react";
import "./animation.scss";

const Profile = () => {
  return (
    <div className="relative rotate-12 lg:pt-12 enterBounce">
      <div>
        <svg className="w-auto h-56" width="70" height="55" viewBox="0 0 70 55">
          <polygon points="0,5 60,0 70,30 10,55" fill="black"></polygon>
          <polygon points="8,7 58,2 67,28 18,48" fill="white"></polygon>
          <svg className="fill-secondary2  dark:fill-secondary1">
            <polygon points="12,11 56,5 64,26 20,42"></polygon>
          </svg>
        </svg>
      </div>
      <img
        className="absolute bottom-[79px] left-[42px] h-48 -rotate-[20deg]"
        src="/image/prof2.png"
        alt=""
      />
    </div>
  );
};

export default Profile;
