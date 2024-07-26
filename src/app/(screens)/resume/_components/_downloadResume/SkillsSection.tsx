export const SkillsSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">{title}</p>
        <hr className="flex w-48 border-black border-[1.5px]" />
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="text-sm text-nowrap mr-1">
            {skill}
            {index === skills.length - 1 ? "." : ","}
          </span>
        ))}
      </div>
    </div>
  );
};
