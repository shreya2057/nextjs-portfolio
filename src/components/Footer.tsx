import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className="flex flex-row py-6 px-16 justify-between items-center text-lime-500 ">
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Connect with me</span>
        <div className="grid grid-cols-3 gap-4">
          <Link href={"/"}>
            <div className="flex gap-2 text-2xl items-center bg-green-900 bg-opacity-50 p-2 rounded-md">
              <IoLogoLinkedin className="self-center" />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex gap-2 text-2xl items-center bg-green-900 bg-opacity-50 p-2 rounded-md">
              <IoLogoGithub className="self-center" />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex gap-2 text-2xl items-center bg-green-900 bg-opacity-50 p-2 rounded-md">
              <IoLogoInstagram className="self-center" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-6 font-semibold  items-center">
        &#169; Shreya Shrestha, 2024
      </div>
    </div>
  );
};
