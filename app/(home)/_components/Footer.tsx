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
      <div className="flex justify-center items-center gap-x-2">
        <Link href="/">
          <IconBrandLinkedin />
        </Link>
        <Link href="/">
          <IconBrandGithub />
        </Link>
        <Link href="/">
          <IconBrandWhatsapp />
        </Link>
        <Link href="/">
          <IconBrandInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
