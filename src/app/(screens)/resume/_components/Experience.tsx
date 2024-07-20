import { experience } from "@/nextjs-portfolio/data/resume";

export const Experience = () => {
  return (
    <div className="flex flex-col bg-gray-700 p-10 rounded-md text-gray-200 gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Experience</p>
        <hr className="flex w-48 border-gray-300 border-[1.5px]" />
      </div>
      <div className="flex flex-col gap-6">
        {experience.map(({ id, position, companyName, timeline, details }) => (
          <div className="flex flex-col gap-2" key={id}>
            <p className="font-bold text-lg">{position}</p>
            <div className="text-sm flex justify-between">
              <p className="font-semibold">{companyName}</p>
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
        ))}
      </div>
    </div>
  );
};
