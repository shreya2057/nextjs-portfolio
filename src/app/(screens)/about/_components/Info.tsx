"use client";
import { ResumeImage } from "@/nextjs-portfolio/assets/images";
import Image from "next/image";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

export const Info = () => {
  return (
    <div className=" w-full flex flex-col items-center bg-gray-700 px-8 py-10 justify-center rounded-md gap-4 h-full">
      <div className="flex rounded-md h-48 p-4 bg-gray-200">
        <Image
          src={ResumeImage}
          className="rounded-md w-32"
          alt="Shreya Shrestha"
        />
      </div>
      <div className="flex text-justify flex-col justify-between gap-3 items-center text-gray-200">
        <p className="text-2xl font-extrabold">Shreya Shrestha</p>
        <div className="text-sm font-semibold bg-gray-500 py-2 px-4 rounded-md">
          React Developer
        </div>

        <div className="flex flex-col gap-3 w-full justify-between text-sm">
          <span className="flex items-center gap-2">
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/iamshreyastha/">
              iamshreyastha
            </a>
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineMail />
            <a href="mailto:shreyashrestha2k57@gmail.com">
              shreyashrestha2k57@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-2 ">
            <AiOutlineGithub />
            <a href="https://github.com/shreya2057">shreya2057</a>
          </span>
        </div>
      </div>
    </div>
  );
};
