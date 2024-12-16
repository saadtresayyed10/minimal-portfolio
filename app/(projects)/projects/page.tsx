import { CarouselProjects } from "./_components/CarouselProjects";
import LilDescription from "./_components/LilDescription";
import DailyMotivation from "./_components/Quotes";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full my-8">
      <DailyMotivation />
      <CarouselProjects />
      <LilDescription />
    </div>
  );
};

export default ProjectPage;
