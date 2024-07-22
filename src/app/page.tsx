import RouteTransition from "../components/Animations/RouteTransition";
import { Landing } from "./_components/Landing";

export default function Home() {
  return (
    <div className="flex w-full">
      <RouteTransition>
        <Landing />
      </RouteTransition>
    </div>
  );
}
