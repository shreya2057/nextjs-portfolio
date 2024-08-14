"use client";
import { PrimaryButton } from "@/nextjs-portfolio/components/Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { AiFillCode } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import { TbMessageCode } from "react-icons/tb";

export const Landing = () => {
  const router = useRouter();

  return (
    <div className="flex bg-gray-800 px-10 lg:px-40 py-10 relative overflow-hidden w-full h-[85dvh]">
      <div className="flex flex-col md:flex-row justify-between w-full gap-20 ">
        <div className="flex md:flex-[65%] gap-5 flex-col justify-center">
          <div className="flex items-center gap-3 text-amber-300 text-sm font-bold bg-amber-200 px-4 py-1 bg-opacity-25 rounded-md max-w-min text-nowrap flex-nowrap">
            <span>Hi! I am Shreya Shrestha</span>
            <GoCodeReview className="text-amber-300 text-lg" />
          </div>
          <p className="text-amber-600 font-extrabold text-3xl">
            React Developer
          </p>
          <div className="text-green-400 text-justify text-sm leading-6">
            I am a front end web developer who is passionate learner with
            expertise in HTML, CSS, JavaScript, React and CSS frameworks.
          </div>
          <PrimaryButton
            text="About me"
            onClickFunction={() => router.push("/about")}
          />
        </div>
        <div className="md:flex-[35%] flex justify-center items-center">
          <div className=" w-60 h-60 md:w-48 md:h-48 relative">
            <AiFillCode className="absolute text-[200px] text-lime-500" />
            <TbMessageCode className="text-lime-500 text-[100px] md:text-4xl absolute -top-16 md:-top-4 -right-4 opacity-35" />
          </div>
        </div>
      </div>
    </div>
  );
};
