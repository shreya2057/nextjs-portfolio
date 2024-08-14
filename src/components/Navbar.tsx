"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  return (
    <div className="flex lg:flex-row py-3 px-8 lg:px-10 justify-between bg-black items-center">
      <div className="flex flex-row justify-between w-full items-center ">
        <Link href={"/"}>
          <div className="font-extrabold text-xl text-green-600">
            Shreya Shrestha
          </div>
        </Link>
        <button
          className="flex lg:hidden p-2 text-amber-500 border-2 border-amber-500 rounded-md"
          onClick={() => setMenuVisibility(!isMenuVisible)}
        >
          <IoMenu />
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? "flex" : "hidden"
        } absolute flex-col pl-8 py-3 lg:p-0 lg:static lg:flex gap-3 lg:gap-6 font-semibold lg:flex-row text-amber-500 items-start lg:items-center z-1 left-0 top-14 backdrop-blur-xl lg:bg-black w-full lg:w-auto z-10`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/experience"}>Experience</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>
          <div className="lg:px-3 lg:py-1 lg:border border-amber-500 rounded-md">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};
