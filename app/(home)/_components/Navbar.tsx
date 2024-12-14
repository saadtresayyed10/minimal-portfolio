import { useState } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const formatDate = () => {
    const now = new Date();
  };

  return <nav className="flex justify-between items-center px-10 py-4"></nav>;
};

export default Navbar;
