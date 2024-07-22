"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { CodingBrowser, CodingIcon } from "../assets/images";
import { BsCodeSquare } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { AiFillCode } from "react-icons/ai";
import RouteTransition from "../components/Animations/RouteTransition";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex w-full">
      <RouteTransition>
        <div className="flex bg-gray-800 px-40 py-10 relative overflow-hidden w-full h-[80dvh]">
          <div className="flex justify-between w-full gap-20 ">
            <div className="flex flex-[65%] gap-5 flex-col justify-center">
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
                text="View my resume"
                onClickFunction={() => {
                  router.push("/resume");
                }}
              />
            </div>
            <div className="flex-[35%] flex justify-center items-center">
              <div className=" w-48 h-48 relative">
                {/* <Image
              src={CodingBrowser}
              className="absolute"
              alt="Avatar image"
              width={200}
              height={150}
            /> */}
                {/* <Image
              className="absolute -bottom-10 -left-10"
              src={CodingIcon}
              alt="Avatar image"
              height={150}
            /> */}
                <AiFillCode className="absolute text-[200px] text-lime-500" />
              </div>
            </div>
          </div>
        </div>
      </RouteTransition>
    </div>
  );
}
