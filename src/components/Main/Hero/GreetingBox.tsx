import React from "react";
import "./greetingbox.scss";
import { GreetingBoxProps } from "../../../../types";
import "./animation.scss";

const GreetingBox = ({ content, style }: GreetingBoxProps) => {
  return (
    <div>
      <div className="dialog bordering enterBounceLate">
        <div className="dialog outer">
          <div className="dialog inner">
            <h1 className={style}>{content}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingBox;
