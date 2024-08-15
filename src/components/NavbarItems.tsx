import Link from "next/link";

export const NavbarItems = () => {
  return (
    <>
      <Link href={"/"} className="flex w-full">
        Home
      </Link>
      <Link href={"/projects"} className="flex w-full">
        Projects
      </Link>
      <Link href={"/experience"} className="flex w-full">
        Experience
      </Link>
      <Link href={"/about"} className="flex w-full">
        About
      </Link>
      <Link href={"/contact"} className="flex w-full">
        <div className="lg:px-3 lg:py-1 lg:border border-amber-500 rounded-md">
          Contact
        </div>
      </Link>
    </>
  );
};
