"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center lg:gap-x-5 gap-x-2"
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center lg:gap-x-10 gap-x-6"
      >
        <Link target="_blank" href="/images/Saad_Sayyed_Resume.pdf">
          <p className="font-agrandir text-xs font-light tracking-wider">
            Resume
          </p>
        </Link>
        <Link target="_blank" href="https://groven-portfolio.vercel.app/">
          <p className="font-agrandir text-xs font-light tracking-wider">
            Agency
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Footer;
