"use client";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const formatDate = () => {
    const now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(now);
  };

  useEffect(() => {
    setCurrentTime(formatDate());

    const interval = setInterval(() => {
      setCurrentTime(formatDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center px-10 py-4">
      <h1 className="font-agrandir lg:text-4xl font-semibold tracking-wider">
        {currentTime}
      </h1>
      <Switch />
    </nav>
  );
};

export default Navbar;
