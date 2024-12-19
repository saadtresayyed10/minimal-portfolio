import { ContentCard } from "./_components/ContentCard";

const EducationPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <ContentCard
        degree="Bachelor's of Computer Science"
        desc="Idk yet."
        logo="/images/avon.png"
        timeline="2021 - 2024"
        univ="Savitribai Phule Pune University"
      />
    </div>
  );
};

export default EducationPage;
