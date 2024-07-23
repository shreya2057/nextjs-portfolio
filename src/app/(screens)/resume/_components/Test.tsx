import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import { AiOutlineGithub } from "react-icons/ai";

export const Test = () => {
  return (
    <div className="flex flex-col items-start bg-gray-700 p-8 rounded-md gap-4">
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Projects</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
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
