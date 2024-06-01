import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex flex-row py-3 px-16 justify-between bg-black items-center">
      <Link href={"/"}>
        <div className="font-extrabold text-xl text-green-600">
          Shreya Shrestha
        </div>
      </Link>
      <div className="flex gap-6 font-semibold text-amber-500 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/certifications"}>Certifications</Link>
        <Link href={"/resume"}>Resume</Link>
        <Link href={"/contact"}>
          <div className="px-3 py-1 border border-amber-500 rounded-md">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};
