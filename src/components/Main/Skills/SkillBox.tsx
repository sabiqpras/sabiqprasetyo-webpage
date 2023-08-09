import React from "react";
import { SkillBoxProps } from "../../../../types";

const SkillBox = ({ pageStatus }: SkillBoxProps) => {
  return (
    <div className="md:flex gap-x-9">
      <div>
        <div className="bg-primary1 inline-block px-5 py-2 -skew-x-12 translate-x-[5.8px]">
          <h3 className="font-Expose text-primary2 text-4xl">
            {pageStatus === 1 ? "Web Development" : "UI Design"}
          </h3>
        </div>
        <div className="bg-primary1 inline-block px-5 py-2 ">
          <p className="font-Hatty text-primary2 text-3xl text-justify">
            {pageStatus === 1
              ? " I build a web with React and NextJS for frontend and backend. Please visit my GitHub page to see my works and other stuff."
              : "I design web or application UI with Figma. I also have expertise with Adobe products such as Photoshop and Illustrator."}
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="bg-primary1 inline-block px-5 py-2 -skew-x-12 translate-x-[5.8px]">
          <h3 className="font-Expose text-primary2 text-4xl">UI Design</h3>
        </div>
        <div className="bg-primary1 inline-block px-5 py-2 ">
          <p className="font-Hatty text-primary2 text-3xl text-justify">
            I design web or application UI with Figma. I also have expertise with Adobe products such as
            Photoshop and Illustrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
