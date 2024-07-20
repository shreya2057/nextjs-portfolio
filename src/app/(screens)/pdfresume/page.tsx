import RouteTransition from "@/nextjs-portfolio/components/Animations/RouteTransition";
import { Experience } from "./_components/Experience";
import { ResumeProjects } from "./_components/ResumeProjects";
import { ResumeSummary } from "./_components/ResumeSummary";

export default function Resume() {
  return (
    <div className="flex w-full justify-center bg-gray-50 py-10">
      <div className="w-[80%] flex flex-col bg-white shadow-md p-10 gap-6">
        <ResumeSummary />
        <div className="flex flex-col">
          <Experience />
          <ResumeProjects />
        </div>
      </div>
    </div>
  );
}
