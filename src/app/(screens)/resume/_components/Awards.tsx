import { awards, education } from "@/nextjs-portfolio/data/resume";
import { BiBookBookmark } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
export const Awards = () => {
  return (
    <div className="flex flex-col items-start bg-gray-700 p-8 rounded-md gap-4">
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Awards</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-3 w-full justify-between text-[15px]">
          {awards?.map(({ id, title, event }) => (
            <div className="flex flex-col gap-2" key={id}>
              <span className="flex items-center gap-2">
                <FaAward />
                <span className="font-semibold text-[13px]">{title}</span>
              </span>
              <span className="flex items-center gap-2 pl-4 text-[13px]">
                <BiBookBookmark />
                <span>{event}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
