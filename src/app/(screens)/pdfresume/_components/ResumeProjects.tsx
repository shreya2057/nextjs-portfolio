import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import { AiOutlineGithub } from "react-icons/ai";

export const ResumeProjects = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col items-center justify-center xl:w-40 h-full">
        <div className="block w-10 h-10 bg-gray-50 rounded-full border-[1px] border-gray-300" />
        <div className="border-l-[1px] border-gray-300 h-full" />
      </div>
      <div className="flex xl: flex-[70%] flex-col gap-6">
        <div>
          <p className="text-2xl font-bold">Projects</p>
          <hr className="flex w-48 border-gray-300" />
        </div>
        <div className="flex flex-col gap-6">
          {resumeProjects.map(
            ({ id, projectName, link, about, keyFeatures, tools }) => (
              <div className="flex flex-col gap-2" key={id}>
                <a href={link}>
                  <div className="text-sm flex gap-5 items-center">
                    <p className="font-bold text-lg">{projectName}</p>
                    <AiOutlineGithub />
                  </div>
                </a>
                <ul className="flex flex-col list-disc pl-6 gap-2">
                  <li className="font-bold">About</li>
                  <ul className="flex flex-col list-disc pl-6 gap-2">
                    <li className="text-sm">{about}</li>
                  </ul>
                </ul>
                <ul className="flex flex-col list-disc pl-6 gap-2">
                  <li className="font-bold">Key Features</li>
                  <ul className="flex flex-col list-disc pl-6 gap-2">
                    {keyFeatures?.map((features) => (
                      <li className="text-sm">{features}</li>
                    ))}
                  </ul>
                </ul>
                <ul className="flex flex-col list-disc pl-6 gap-2">
                  <li className="font-bold">Tools</li>
                  <ul className="flex flex-col list-disc pl-6 gap-2">
                    <li className="text-sm">{tools}</li>
                  </ul>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
