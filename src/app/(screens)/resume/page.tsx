import RouteTransition from "@/nextjs-portfolio/components/Animations/RouteTransition";
import { Experience } from "./_components/Experience";
import { ResumeProjects } from "./_components/ResumeProjects";
import { Details } from "./_components/Details";
import { About } from "./_components/About";
import { Education } from "./_components/Education";
import { Skills } from "./_components/Skills";
import {
  additionalSkills,
  skills,
  volunteering,
} from "@/nextjs-portfolio/data/resume";
import { Awards } from "./_components/Awards";

export default function Resume() {
  return (
    <div className="flex w-full justify-center h-full px-10 gap-10">
      <div className="flex flex-col md:flex-[20%] gap-6">
        <Details />
        <Skills title="Skills" skills={skills} />
        <Education />
        <Skills title="Additional Skills" skills={additionalSkills} />
        <Skills title="Volunteering" skills={volunteering} />
        <Awards />
      </div>
      <div className="flex flex-col gap-6 flex-[75%] ">
        <About />
        <Experience />
        <ResumeProjects />
      </div>
    </div>
  );
}
