import { ThemeSwitch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NestNav = () => {
  return (
    <div className="flex justify-between items-center lg:px-10 px-6 py-4 w-full bg-white dark:bg-black">
      <Link href="/">
        <ArrowLeft className="w-8 h-8" />
      </Link>
      <div className="flex justify-center items-center flex-col gap-y-2">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NestNav;
