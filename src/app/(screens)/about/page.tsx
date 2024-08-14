import { Description } from "./_components/Description";
import { Info } from "./_components/Info";

export default function Resume() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center h-full px-10 gap-6">
      <div className="flex lg:flex-[20%] ">
        <Info />
      </div>
      <div className="lg:flex-[75%] ">
        <Description />
      </div>
    </div>
  );
}
