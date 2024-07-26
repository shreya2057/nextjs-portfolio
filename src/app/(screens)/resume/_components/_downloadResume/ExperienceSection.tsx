import { experience } from "@/nextjs-portfolio/data/resume";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-2xl font-bold">Experience</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-4">
        {experience.map(({ id, position, companyName, timeline, details }) => (
          <div className="flex flex-col gap-1" key={id}>
            <p className="font-bold text-lg">{position}</p>
            <div className="text-sm flex justify-between">
              <p className="font-semibold">{companyName}</p>
              <p>{timeline}</p>
            </div>
            <ul className="flex flex-col list-disc pl-6 gap-1">
              {details.map((detail) => (
                <li key={detail} className="text-justify text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
