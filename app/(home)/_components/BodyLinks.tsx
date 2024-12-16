import { ArrowRight } from "lucide-react";
import Link from "next/link";

const bodyLinks = [
  {
    name: "About",
    ref: "/about",
  },
  {
    name: "Projects",
    ref: "/projects",
  },
  {
    name: "Work",
    ref: "/experience",
  },
  {
    name: "Education",
    ref: "/education",
  },
];

const BodyLinks = () => {
  return (
    <div className="flex justify-start items-start flex-col gap-y-10 font-agrandir capitalize font-bold lg:text-6xl text-5xl lg:mr-[500px]">
      {bodyLinks.map((bodyLink) => (
        <Link
          key={bodyLink.name}
          className="flex items-center gap-x-2 duration-300 group"
          href={bodyLink.ref}
        >
          <span>{bodyLink.name}</span>
          <ArrowRight className="w-12 h-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
};

export default BodyLinks;
