import { additionalSkills, skills } from "@/nextjs-portfolio/data/resume";
import { forwardRef } from "react";
import { AwardsSection } from "./_downloadResume/AwardsSection";
import { EducationSection } from "./_downloadResume/EducationSection";
import { ExperienceSection } from "./_downloadResume/ExperienceSection";
import { ProjectSection } from "./_downloadResume/ProjectSection";
import { ResumeSummary } from "./_downloadResume/ResumeSummary";
import { SkillsSection } from "./_downloadResume/SkillsSection";
import { VolunteeringSection } from "./_downloadResume/VolunteeringSection";

const DownloadResume = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  return (
    <div ref={ref} className="w-full flex flex-col bg-white gap-6">
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
