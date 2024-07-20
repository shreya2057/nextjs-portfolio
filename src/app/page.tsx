"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { CodingBrowser, CodingIcon } from "../assets/images";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex bg-black px-16 py-10 relative overflow-hidden">
      <div className="flex justify-between w-full gap-20 ">
        <div className="flex flex-1 gap-5 flex-col justify-center">
          <div className="flex gap-4">
            <div className=" text-amber-600 font-bold text-5xl">Hello!!!</div>
          </div>
          <div className="text-green-400 text-justify">
            I am a front end web developer who is passionate learner with
            expertise in HTML, CSS, JavaScript, React and CSS frameworks. I
            excel at designing responsive and dyanmic website using various
            component library such as Ant design, Chakra UI and so on. With the
            ability learn and adapt to new frameworks and library, I have
            created numeroud creative and dynamic websites. I also have proven
            experience as a React Developer.
          </div>
          <PrimaryButton
            text="View my resume"
            onClickFunction={() => {
              router.push("/resume");
            }}
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className=" w-48 h-48 relative">
            <Image
              src={CodingBrowser}
              className="absolute"
              alt="Avatar image"
              width={200}
              height={150}
            />
            <Image
              className="absolute -bottom-10 -left-10"
              src={CodingIcon}
              alt="Avatar image"
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
