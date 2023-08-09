"use client";
import React, { useEffect } from "react";
import "./switcher.scss";
import { SwitcherProps } from "../../../../types";

const Switcher = ({ isChecked, handleChange }: SwitcherProps) => {
  return (
    <div className="pl-6">
      <label className="switch font-Lucky ">
        <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Switcher;
