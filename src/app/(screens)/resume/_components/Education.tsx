import { education } from "@/nextjs-portfolio/data/resume";
import { BiBookBookmark } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoCalendarOutline, IoDocumentTextOutline } from "react-icons/io5";
export const Education = () => {
  return (
    <div className="flex flex-col items-start bg-gray-700 p-8 rounded-md gap-4">
      <div className="flex text-justify flex-col items-start gap-3 text-gray-200">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Education</p>
          <hr className="flex w-36 border-gray-300 border-[1.5px]" />
        </div>
        <div className="flex flex-col gap-3 w-full justify-between text-[15px]">
          {education?.map(
            ({ id, courseName, gpa, graduationYear, institution }) => (
              <div className="flex flex-col gap-2" key={id}>
                <span className="flex items-center gap-2">
                  <HiOutlineAcademicCap />
                  <span className="font-semibold">{institution}</span>
                </span>
                <span className="flex items-center gap-2 pl-4 text-[13px]">
                  <BiBookBookmark />
                  <span>{courseName}</span>
                </span>
                <span className="flex items-center gap-2 pl-4 text-[13px]">
                  <IoCalendarOutline />
                  <span>Graduation Year: {graduationYear}</span>
                </span>
                <span className="flex items-center gap-2 pl-4 text-[13px]">
                  <IoDocumentTextOutline />
                  <span>CGPA: {gpa}</span>
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
