"use client";
import { GreyButton } from "@/nextjs-portfolio/components/Buttons/GreyButton";
import { PrimaryButton } from "@/nextjs-portfolio/components/Buttons/PrimaryButton";
import { resumeProjects } from "@/nextjs-portfolio/data/resume";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineGithub } from "react-icons/ai";

function ProjectDescription({ params }: { params: { slug: string } }) {
  const {
    id,
    projectName,
    link,
    about,
    keyFeatures,
    tools,
    projectType,
    image,
  } = resumeProjects[Number(params?.slug) - 1];
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full bg-gray-700 p-10 rounded-md text-gray-200 justify-center">
      <div>
        <p className="text-2xl font-bold">Projects Description</p>
        <hr className="flex w-72 border-gray-300  border-[1.5px]" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-[55%] flex-col gap-4">
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
        <div className="flex-[45%] flex items-center h-full">
          <Image
            src={image}
            alt="Project image"
            className="w-full rounded-lg"
            height={400}
            objectFit="stretch"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 sm:flex-row w-full justify-center sm:justify-between pt-2">
        <Link href={link} passHref={true}>
          <PrimaryButton
            text="View github repository"
            onClickFunction={() => {}}
          />
        </Link>
        <GreyButton
          text="View other projects"
          onClickFunction={() => router.push("/projects")}
        />
      </div>
    </div>
  );
}

export default ProjectDescription;
