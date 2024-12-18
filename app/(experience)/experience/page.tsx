import { Rocket, Users } from "lucide-react";
import ExperienceComponent from "./_components/ExperienceComponent";

const WorkPage = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full min-h-screen">
      <h1 className="lg:text-4xl text-xl font-semibold capitalize font-agrandir text-center tracking-wide">
        My Professional and Freelancing Experience
      </h1>
      <div className="flex items-center lg:gap-x-[200px] gap-x-8">
        <button className="flex items-center justify-center gap-x-2 hover:gap-x-4 transition duration-300 bg-black text-white dark:bg-white dark:text-black uppercase font-agrandir px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white border-2 border-black dark:border-white">
          Professional <Users className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center gap-x-2 hover:gap-x-4 transition duration-300 bg-black text-white dark:bg-white dark:text-black uppercase font-agrandir px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white border-2 border-black dark:border-white">
          Freelance <Rocket className="w-4 h-4" />
        </button>
      </div>
      <ExperienceComponent />
    </div>
  );
};

export default WorkPage;
