import { education, skills } from "@/nextjs-portfolio/data/resume";
import { GoStarFill } from "react-icons/go";

export const Skills = () => {
  return (
    <div className="flex flex-col items-start bg-gray-700 p-8 rounded-md gap-4">
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Skills</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-2 w-full justify-between text-[15px]">
          {skills?.map((skill, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <span className="flex items-center gap-2 pl-4 text-[13px]">
                <GoStarFill />
                <span>{skill}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
