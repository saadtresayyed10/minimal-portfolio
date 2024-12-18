import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceComponent = () => {
  return (
    <div className="flex justify-between items-center gap-x-10 w-full lg:px-[300px] px-5 mt-10">
      <div className="flex justify-start items-start flex-col font-agrandir">
        <Link href="https://groven-portfolio.vercel.app/" target="_blank">
          <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-x-2 duration-300 hover:underline hover:gap-x-4">
            Groven
            <span>
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </span>
          </h3>
        </Link>
        <h4 className="lg:text-base text-sm lg:mt-4 mt-2">
          CEO & Fullstack Web Developer
        </h4>
        <p className="lg:text-sm text-xs font-light text-muted-foreground">
          2024 - Forever
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/grovenlogo.png"
          alt="Img"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default ExperienceComponent;
