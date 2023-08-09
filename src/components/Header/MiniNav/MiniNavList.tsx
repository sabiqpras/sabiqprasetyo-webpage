import React from "react";
import { MiniNavListProps } from "../../../../types";
import "./mininavlist.scss";
import Link from "next/link";

const MiniNavList = ({ title, href, status, handleClick }: MiniNavListProps) => {
  return (
    <li className={`${status ? "animationNav" : ""}`}>
      <Link className="link-wrapper" title={title} href={href} onClick={handleClick}>
        <span className="fallback">{title}</span>
        <div className="img-wrapper">
          <img className="normal outline-8 h-11" src={`/image/${title}_normal.png`} />
        </div>
      </Link>
    </li>
  );
};

export default MiniNavList;
