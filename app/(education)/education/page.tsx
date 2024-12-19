import { ContentCard } from "./_components/ContentCard";

const EducationPage = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full min-h-screen">
      <h1 className="lg:text-6xl text-4xl font-semibold capitalize font-agrandir text-center tracking-wide">
        Education
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:p-6 p-6 lg:gap-10 gap-4">
        <ContentCard
          degree="Bachelor's of Computer Science"
          desc="Gained expertise in algorithms, web development, programming languages, and project management for tech solutions."
          logo="/images/savitri.png"
          timeline="2021 - 2024"
          univ="Savitribai Phule Pune University"
        />
        <ContentCard
          degree="Majors in Gothic Architecture"
          desc="Studying pointed arches, ribbed vaults, intricate stonework, and historical preservation for stunning medieval designs."
          logo="/images/yale.png"
          timeline="2024 - 2030"
          univ="Yale University"
        />
        <ContentCard
          degree="Specialization in AIDS & AIML"
          desc="Learning to master data science, machine learning, AI models, predictive analytics, and innovative solutions for real-world applications."
          logo="/images/michi.png"
          timeline="2024 - 2027"
          univ="Fashion as Design"
        />
        <ContentCard
          degree="Fashion as Design"
          desc="Exploring textiles, patterns, creative styling, and innovative garment construction for contemporary fashion trends."
          logo="/images/moma.png"
          timeline="2024 - 2027"
          univ="Museum of Modern Art"
        />
      </div>
    </div>
  );
};

export default EducationPage;
