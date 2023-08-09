"use client";

import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import Switcher from "./Switcher";
import { useTheme } from "next-themes";
import { NavbarProps } from "../../../../types";
import Link from "next/link";

const Navbar = ({ handleClick, handleTheme, checked, status }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between">
      <Link
        title="Sabiq Prasetyo"
        href="/"
        className="text-primary1 dark:text-primary2 md:text-6xl font-Expose text-5xl outline-none"
      >
        SP
      </Link>

      <div className="lg:flex lg:items-center lg:space-x-6 hidden lg:pr-5">
        <ul className=" flex text-xl lg:text-2xl font-medium">
          <NavList title="About" href="/About" />
          <NavList title="Archive" href="/Archive" />
          <NavList title="Ask" href="/Ask" />
        </ul>
        <Switcher isChecked={checked} handleChange={handleTheme} />
      </div>
      <div className="font-Expose text-4xl lg:hidden ">
        <button onClick={handleClick}>{status ? "Close" : "Menu"}</button>
      </div>
    </nav>
  );
};

export default Navbar;
