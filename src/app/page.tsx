import Image from "next/image";
import { AvatarImage, BrownBubble, GreenBubble } from "../assets/images";

export default function Home() {
  return (
    <div className="flex max-h-min w-full bg-black px-16 items-center py-10 relative overflow-hidden">
      <Image
        src={GreenBubble}
        alt="green bubble"
        className="absolute w-20 top-10 right-20 opacity-20"
      />
      <Image
        src={GreenBubble}
        alt="green bubble"
        className="absolute w-20 top-60 right-40 opacity-20"
      />
      <Image
        src={BrownBubble}
        alt="brown bubble"
        className="absolute w-20 bottom-10 right-60 opacity-20"
      />
      <Image
        src={GreenBubble}
        alt="brown bubble"
        className="absolute w-20 top-60 -right-10 opacity-20"
      />
      <Image
        src={BrownBubble}
        alt="brown bubble"
        className="absolute w-20 bottom-0 right-0 opacity-20"
      />
      <div className="flex justify-between w-full ">
        <div className="flex flex-1 gap-5 flex-col justify-center">
          <div className="flex gap-4">
            <div className=" text-amber-600 font-bold text-5xl">Hello!!!</div>
          </div>
          <div className="text-green-400">
            I am a front end web developer who is passionate learner with
            expertise in HTML, CSS, JavaScript, React and CSS frameworks. I
            excel at designing responsive and dyanmic website using various
            component library such as Ant design, Chakra UI and so on. With the
            ability learn and adapt to new frameworks and library, I have
            created numeroud creative and dynamic websites. I also have proven
            experience as a React Developer.
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <Image
            src={AvatarImage}
            className="z-10"
            alt="Avatar image"
            height={360}
          />
        </div>
      </div>
    </div>
  );
}
