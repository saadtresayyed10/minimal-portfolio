import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4">
      <div className="flex justify-center items-center lg:gap-x-5">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/saad-sayyed-trev/"
        >
          <IconBrandLinkedin className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link target="_blank" href="https://github.com/saadtresayyed10/">
          <IconBrandGithub className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link
          target="_blank"
          href="https://wa.me/+917887630243?text=Hi%20there!%20I%20found%20your%20website%20and%20would%20like%20to%20connect.
"
        >
          <IconBrandWhatsapp className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/sameoldtreva">
          <IconBrandInstagram className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
      </div>
      <div className="flex justify-center items-center lg:gap-x-10">
        <Link href="/careers">
          <p className="font-agrandir lg:text-xs font-light tracking-wider">
            Careers
          </p>
        </Link>
        <Link href="/">
          <p className="font-agrandir lg:text-xs font-light tracking-wider">
            Blog
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
