import { experience } from "@/nextjs-portfolio/data/resume";

export const ResumeProjects = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col items-center justify-center xl:w-40 h-full">
        <div className="block w-10 h-10 bg-gray-50 rounded-full border-[1px] border-gray-300" />
        <div className="border-l-[1px] border-gray-300 h-full" />
      </div>
      <div className="flex xl: flex-[70%] flex-col gap-6">
        <div>
          <p className="text-2xl font-bold">Experience</p>
          <hr className="flex w-48 border-gray-300" />
        </div>
        <div className="flex flex-col gap-6">
          {experience.map(
            ({ id, position, companyName, timeline, details }) => (
              <div className="flex flex-col gap-2" key={id}>
                <p className="font-bold text-lg">{position}</p>
                <div className="text-sm flex justify-between">
                  <p>{companyName}</p>
                  <p>{timeline}</p>
                </div>
                <ul className="flex flex-col list-disc pl-6 gap-2">
                  {details.map((detail) => (
                    <li key={detail} className="text-justify text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
