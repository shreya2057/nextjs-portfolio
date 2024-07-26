import { additionalSkills, skills } from "@/nextjs-portfolio/data/resume";
import { forwardRef, LegacyRef, MutableRefObject } from "react";
import { ResumeSummary } from "./_downloadResume/ResumeSummary";
import { ExperienceSection } from "./_downloadResume/ExperienceSection";
import { SkillsSection } from "./_downloadResume/SkillsSection";
import { EducationSection } from "./_downloadResume/EducationSection";
import { ProjectSection } from "./_downloadResume/ProjectSection";
import { AwardsSection } from "./_downloadResume/AwardsSection";
import { VolunteeringSection } from "./_downloadResume/VolunteeringSection";

const DownloadResume = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  return (
    <div
      ref={ref}
      className="w-full flex flex-col bg-white shadow-md p-10 gap-6"
    >
      <ResumeSummary />
      <div className="flex flex-col gap-6">
        <ExperienceSection />
        <SkillsSection skills={skills} title="Skills" />
        <EducationSection />
        <ProjectSection />
        <SkillsSection skills={additionalSkills} title="Additional Skills" />
        <AwardsSection />
        <VolunteeringSection />
      </div>
    </div>
  );
});

export default DownloadResume;
