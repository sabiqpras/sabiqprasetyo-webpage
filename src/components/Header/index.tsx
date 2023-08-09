"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Navbar from "./Navbar";
import MiniNav from "./MiniNav";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      setChecked(true);
    }
  }, []);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("CHECKED_STATUS");

  //   if (data !== null) setChecked(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("CHECKED_STATUS", JSON.stringify(checked));
  // }, [checked]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    e.preventDefault;
    if (checked === false) {
      setTheme("light");
    } else if (checked === true) {
      setTheme("dark");
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="sticky top-0 z-30 bg-primary2 dark:bg-primary1  border-primary1 dark:border-primary2 border-b-4 ">
        <div className="px-6 md:px-12 py-2 md:py-4 max-w-6xl w-full mx-auto">
          <Navbar
            handleClick={handleToggle}
            status={toggle}
            checked={checked}
            handleTheme={changeTheme}
          />
        </div>
      </div>
      <MiniNav
        animation={toggle}
        checked={checked}
        handleTheme={changeTheme}
        handleClick={handleToggle}
      />
    </header>
  );
};

export default Header;
