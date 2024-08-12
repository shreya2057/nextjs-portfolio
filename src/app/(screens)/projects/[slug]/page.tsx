import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import { AiOutlineGithub } from "react-icons/ai";

function ProjectDescription({ params }: { params: { slug: string } }) {
  const { id, projectName, link, about, keyFeatures, tools, projectType } =
    resumeProjects[Number(params?.slug)];
  return (
    <div className="flex flex-col gap-6 w-full bg-gray-700 p-10 rounded-md text-gray-200 justify-center">
      <div>
        <p className="text-2xl font-bold">Projects Description</p>
        <hr className="flex w-72 border-gray-300  border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <a href={link}>
            <div className="flex gap-5 items-center text-xl">
              <p className="font-bold ">{projectName}</p>
              <AiOutlineGithub />
            </div>
          </a>
          <p className="text-sm font-semibold">{projectType}</p>
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
      </div>
    </div>
  );
}

export default ProjectDescription;
