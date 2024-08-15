"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavbarItems } from "./NavbarItems";

export const NavBar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const variants = {
    open: {
      y: 6,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 0,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div className="flex w-full lg:flex-row py-3 px-8 lg:px-10 justify-between bg-black items-center transition-all duration-150 ease-in-out">
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
      <motion.nav
        initial={false}
        className={
          "flex lg:hidden flex-col gap-4 w-full absolute pl-8 py-5 font-semibold text-amber-500 items-start left-0 top-12 backdrop-blur-xl z-10"
        }
        animate={isMenuVisible ? "open" : "closed"}
        variants={variants}
      >
        <NavbarItems />
      </motion.nav>
      <div
        className={
          "hidden lg:flex gap-6 font-semibold text-amber-500 items-center bg-black "
        }
      >
        <NavbarItems />
      </div>
    </div>
  );
};
