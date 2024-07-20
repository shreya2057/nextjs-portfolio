import RouteTransition from "@/nextjs-portfolio/components/Animations/RouteTransition";
import { Experience } from "./_components/Experience";
import { ResumeProjects } from "./_components/ResumeProjects";
import { Details } from "./_components/Details";
import { About } from "./_components/About";

export default function Resume() {
  return (
    <div className="flex w-full justify-center h-full px-10 gap-10">
      <div className="md:flex-[20%]">
        <Details />
      </div>

      <div className="flex flex-col gap-6 flex-[75%]">
        <About />
        <Experience />
      </div>
    </div>
  );
}
