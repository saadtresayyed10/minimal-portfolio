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
        <Link href="/">
          <IconBrandLinkedin className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link href="/">
          <IconBrandGithub className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link href="/">
          <IconBrandWhatsapp className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
        <Link href="/">
          <IconBrandInstagram className="w-5 h-5 text-neutral-800 dark:text-neutral-100 stroke-[1.5]" />
        </Link>
      </div>
      <div className="flex justify-center items-center lg:gap-x-10">
        <Link href="/">
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
