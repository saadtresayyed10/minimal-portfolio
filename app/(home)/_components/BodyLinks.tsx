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
    <div className="flex justify-center items-center flex-col lg:gap-y-10 font-agrandir capitalize font-bold lg:text-6xl lg:mr-[500px]">
      {bodyLinks.map((bodyLink) => (
        <Link
          key={bodyLink.name}
          className="flex items-center lg:gap-x-2 duration-300 group"
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
