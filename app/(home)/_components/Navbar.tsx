"use client";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

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
    const date = String(now.getDay()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);

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
    <nav className="flex justify-between items-center px-10 py-4">
      <h1 className="font-agrandir lg:text-4xl font-semibold tracking-wider">
        {currentDate}
      </h1>
      <Switch />
    </nav>
  );
};

export default Navbar;
