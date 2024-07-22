export const About = () => {
  return (
    <div className="flex flex-col bg-gray-700 p-10 rounded-md text-gray-200 gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">About</p>
        <hr className="border-gray-300 w-24 border-[1.5px]" />
      </div>
      <p className="text-sm text-justify whitespace-pre-line leading-6">
        A front-end developer with a solid understanding of HTML, CSS,
        JavaScript, TypeScript, and React. One year of professional experience
        working with Next.js, CSS frameworks like Tailwind CSS, and React UI
        libraries such as Chakra UI, ShadCn, and React-hook-form. Highly
        passionate about continuously learning new technologies and proficient
        in creating responsive user interfaces. Committed to delivering better
        quality products on time and meeting requirements.
      </p>
    </div>
  );
};
