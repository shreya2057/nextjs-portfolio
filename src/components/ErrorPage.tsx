"use client";

import { useRouter } from "next/navigation";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { PrimaryButton } from "./Buttons/PrimaryButton";

function ErrorPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full bg-gray-900 p-28 rounded-md text-gray-200 justify-center items-center">
      <p className="text-3xl font-bold text-green-500">Error encountered ...</p>
      <BiSolidMessageRoundedError className="text-[200px] text-lime-500" />
      <p className="text-orange-400">
        We are try to fix the problem please try again after few minutes.
      </p>
      <PrimaryButton
        text="Go Home"
        onClickFunction={() => {
          window.location.href = "/";
        }}
      />
    </div>
  );
}
export default ErrorPage;
