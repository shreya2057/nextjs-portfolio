import {
  aboutSectionSkills,
  additionalSkills,
  skills,
} from "@/nextjs-portfolio/data/resume";
import { GoStarFill } from "react-icons/go";

const skillsType = {
  frontEnd: "Front-End Technologies",
  frameworks: "Frameworks & Libraries",
  apiAndState: "API and State management",
  tools: "Tools & Platforms",
};
export const Description = () => {
  return (
    <div className="flex flex-col bg-gray-700 p-10 rounded-md text-gray-200 gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">About</p>
          <hr className="border-gray-300 w-24 border-[1.5px]" />
        </div>
        <p className="text-sm text-justify whitespace-pre-line leading-6">
          A front-end developer with a solid understanding of HTML, CSS,
          JavaScript, TypeScript, and React. One year of professional experience
          working with Next.js, CSS frameworks like Tailwind CSS, and React UI
          libraries such as Chakra UI, ShadCn, and React-hook-form. Highly
          passionate about continuously learning new technologies and proficient
          in creating responsive user interfaces. Committed to delivering better
          quality products on time and meeting requirements.
        </p>
      </div>
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Skills</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-2 w-full justify-between">
          {Object.keys(skillsType)?.map((type, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <span className="flex items-center gap-2 pl-4 text-sm">
                <GoStarFill />
                <strong>{skillsType[type as keyof typeof skillsType]}:</strong>
                {aboutSectionSkills[
                  type as keyof typeof aboutSectionSkills
                ].map((skill, index) => (
                  <span className="flex gap-1">
                    {skill}
                    {aboutSectionSkills[type as keyof typeof skillsType]
                      .length -
                      1 ===
                    index
                      ? ""
                      : ","}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Additional Skills</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-2 w-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 pl-4 text-sm">
              <GoStarFill />

              {additionalSkills.map((skill, index) => (
                <span className="flex gap-1" key={skill}>
                  {skill}
                  {additionalSkills.length - 1 === index ? "" : ","}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
