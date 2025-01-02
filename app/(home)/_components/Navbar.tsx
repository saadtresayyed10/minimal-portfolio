"use client";

import { ThemeSwitch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  const formatTime = () => {
    const now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(now);
  };

  const formatDate = () => {
    const now = new Date();

    const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      now
    );
    const date = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear());

    return `${day}, ${date}/${month}/${year}`;
  };

  useEffect(() => {
    setCurrentDate(formatDate());
    setCurrentTime(formatTime());

    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center lg:px-10 px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="font-agrandir text-2xl font-semibold tracking-wider">
          {currentTime}
        </h1>
        <h1 className="font-agrandir text-sm font-light tracking-wider">
          {currentDate}
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center flex-col gap-y-2"
      >
        <ThemeSwitch />
        <p className="font-agrandir text-[8px] font-light tracking-wider">
          Light & Dark
        </p>
      </motion.div>
    </nav>
  );
};

export default Navbar;
