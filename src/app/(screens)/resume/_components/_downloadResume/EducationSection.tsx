import { education } from "@/nextjs-portfolio/data/resume";
import { BiBookBookmark } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoCalendarOutline, IoDocumentTextOutline } from "react-icons/io5";
export const EducationSection = () => {
  return (
    <div className="flex text-justify flex-col items-start gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">Education</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-2 w-full justify-between text-[15px]">
        {education?.map(
          ({ id, courseName, gpa, graduationYear, institution }) => (
            <div className="flex flex-col gap-1" key={id}>
              <span className="flex items-center gap-2">
                <BiBookBookmark />
                <span className="font-semibold">{courseName}</span>
              </span>
              <div className="flex gap-2">
                <span className="flex items-center gap-2 pl-4 text-[13px]">
                  <HiOutlineAcademicCap />
                  <span>{institution}</span>
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
            </div>
          )
        )}
      </div>
    </div>
  );
};
