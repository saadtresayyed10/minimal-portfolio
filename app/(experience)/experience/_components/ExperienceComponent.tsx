import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const expDescList = [
  {
    list: "Led the development of a SaaS platform for barbershops, enabling online appointment scheduling, inventory management, and customer relationship management.",
  },
  {
    list: "Designed and built the full-stack application, including front-end (user interface & user experience) and back-end (server-side logic, databases).",
  },
  {
    list: "Implemented complex scheduling algorithms to optimize time slots and accommodate barber availability.",
  },
  {
    list: "Built a CRM system to manage customer data, preferences, and communication.",
  },
  {
    list: "Integrated secure payment gateways for seamless online transactions.",
  },
];

const ExperienceComponent = () => {
  return (
    <div className="flex justify-center items-start flex-col lg:px-[300px] px-5 mt-10">
      <div className="flex justify-between items-center gap-x-10 w-full">
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
            className="rounded-lg"
          />
        </div>
      </div>
      <ul className="flex justify-start items-start flex-col font-agrandir gap-y-2 w-[90%] lg:w-full text-neutral-800 dark:text-neutral-200 text-xs lg:text-sm capitalize mt-6 list-disc lg:ml-0 ml-4">
        {expDescList.map((lists, idx) => (
          <li key={idx}>{lists.list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceComponent;
