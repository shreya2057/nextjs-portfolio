"use client";
import { TbError404 } from "react-icons/tb";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full bg-gray-900 p-28 rounded-md text-gray-200 justify-center items-center">
      <p className="text-3xl font-bold text-green-500">Page not found</p>
      <div className="bg-gray-800 px-28 py-6 rounded-xl">
        <TbError404 className="text-[200px] text-lime-500" />
      </div>
      <PrimaryButton text="Go Home" onClickFunction={() => router.push("/")} />
    </div>
  );
}
export default NotFound;
