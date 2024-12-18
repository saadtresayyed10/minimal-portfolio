import ExperienceComponent from "./_components/ExperienceComponent";

const WorkPage = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full min-h-screen">
      <h1 className="lg:text-6xl text-4xl font-semibold capitalize font-agrandir text-center tracking-wide">
        My Experience
      </h1>
      <ExperienceComponent />
    </div>
  );
};

export default WorkPage;
