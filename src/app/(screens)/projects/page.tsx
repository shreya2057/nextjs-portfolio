import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import { AiOutlineGithub } from "react-icons/ai";

function Projects() {
  return (
    <div className="flex flex-col gap-4  bg-gray-700 p-10 rounded-md text-gray-200">
      <div>
        <p className="text-2xl font-bold">Projects</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-4">
        {resumeProjects.map(
          ({ id, projectName, link, about, keyFeatures, tools }) => (
            <div className="flex flex-col gap-1" key={id}>
              <a href={link}>
                <div className="text-sm flex gap-5 items-center">
                  <p className="font-bold text-lg">{projectName}</p>
                  <AiOutlineGithub />
                </div>
              </a>
              <ul className="flex flex-col list-disc pl-6">
                <li className="font-bold">About</li>
                <ul className="flex flex-col list-disc pl-6 gap-1">
                  <li className="text-sm">{about}</li>
                </ul>
              </ul>
              <ul className="flex flex-col list-disc pl-6">
                <li className="font-bold">Key Features</li>
                <ul className="flex flex-col list-disc pl-6 gap-1">
                  {keyFeatures?.map((features, index) => (
                    <li className="text-sm" key={index}>
                      {features}
                    </li>
                  ))}
                </ul>
              </ul>
              <ul className="flex flex-col list-disc pl-6">
                <li className="font-bold">Tools</li>
                <ul className="flex flex-col list-disc pl-6 gap-1">
                  <li className="text-sm">{tools}</li>
                </ul>
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
