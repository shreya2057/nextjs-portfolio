"use client";
import { GreyButton } from "@/nextjs-portfolio/components/Buttons/GreyButton";
import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import { IoMdArrowRoundForward } from "react-icons/io";

export const ResumeProjects = () => {
  return (
    <div className="flex flex-col items-start bg-gray-700 p-8 rounded-md gap-4">
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Projects</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-6">
          {resumeProjects.map(({ id, projectName, about }) => (
            <div
              className="flex flex-col gap-2 p-6 bg-gray-600 rounded-md"
              key={id}
            >
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg">{projectName}</p>
                <hr className="flex w-28 border-gray-300 border-1" />
              </div>
              <span className="flex gap-2">
                <IoMdArrowRoundForward className="flex-shrink-0 flex-grow-0" />
                <span className="text-sm">{about}</span>
              </span>
              <div className="self-end">
                <GreyButton onClickFunction={() => {}} text="View Details" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
