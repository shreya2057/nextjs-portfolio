import { ResumeImage } from "@/nextjs-portfolio/assets/images";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const ResumeSummary = () => {
  return (
    <div className="flex justify-center w-full gap-10">
      <div className="hidden xl:flex items-center w-40 h-48 border-gray-300 p-1 rounded-md">
        <Image
          src={ResumeImage}
          className="rounded-md h-48"
          alt="Shreya Shrestha"
        />
      </div>
      <div className="flex flex-[70%] text-sm text-justify flex-col xl:h-48 justify-between gap-2 xl:gap-0">
        <p className="text-3xl font-extrabold">Shreya Shrestha</p>
        <p className="text-lg font-semibold text-gray-500">React Developer</p>

        <div className="flex flex-wrap gap-2 w-full justify-between text-[13px]">
          <span className="flex items-center gap-2">
            <AiOutlinePhone />
            <span>+977 9746488946</span>
          </span>
          <span className="flex items-center gap-2">
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/iamshreyastha/">
              iamshreyastha
            </a>
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineMail />
            <a href="mailto:shreyashrestha2k57@gmail.com">
              shreyashrestha2k57@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-2 ">
            <AiOutlineGithub />
            <a href="https://github.com/shreya2057">shreya2057</a>
          </span>
        </div>
        <hr className="border-black border-[1.5px]" />
        <p className="text-sm text-justify">
          A front-end developer with a solid understanding of HTML, CSS,
          JavaScript, TypeScript, and React. One year of professional experience
          working with Next.js, CSS frameworks like Tailwind CSS, and React UI
          libraries such as Chakra UI, ShadCn, and React-hook-form. Highly
          passionate about continuously learning new technologies and proficient
          in creating responsive user interfaces. Committed to delivering better
          quality products on time and meeting requirements.
        </p>
      </div>
    </div>
  );
};
