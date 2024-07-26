import { volunteering } from "@/nextjs-portfolio/data/resume";
import { IoMdArrowRoundForward } from "react-icons/io";

export const VolunteeringSection = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">Volunteering</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-1">
        {volunteering.map((volunteer, index) => (
          <div className="flex gap-2" key={index}>
            <IoMdArrowRoundForward className="flex-shrink-0 flex-grow-0" />
            <span key={index} className="text-sm text-nowrap mr-1">
              {volunteer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
