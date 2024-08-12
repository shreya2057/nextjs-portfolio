"use client";
import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Projects() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4  p-10 rounded-md text-gray-200">
      <div>
        <p className="text-2xl font-bold">Projects</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-row flex-wrap gap-8 ">
        {resumeProjects.map(({ id, image, projectName }, index) => (
          <div
            className="flex flex-col gap-4 items-center bg-gray-900 p-8 rounded-lg cursor-pointer"
            onClick={() => router.push(`/projects/${index + 1}`)}
            key={id}
          >
            <div className="flex h-56 relative w-[330px]">
              <Image src={image} alt="Project image" className="rounded-lg" />
            </div>
            <p className="text-xl font-bold">{projectName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
