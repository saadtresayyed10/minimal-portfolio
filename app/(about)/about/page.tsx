import { QuestionForm } from "./_components/QuestionForm";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:gap-y-10 justify-center items-center w-full min-h-screen lg:text-xl font-medium capitalize text-center font-agrandir">
      <h4 className="lg:w-[80%] lg:mt-16">
        Greetings, traveler. I am Saad Sayyed, a 21-year-old soul residing in
        the vibrant heart of Pune, Maharashtra. This website reflects the quiet
        minimalistic harmony of my life—a canvas of simplicity painted with
        subtle strokes. I am not an introvert, but an extrovert who dances to
        his own rhythm, steering clear of shallow tides.
      </h4>
      <h4 className="lg:w-[80%]">
        I walk in the grace of GOD, for without Him, I am but a shadow. My mind
        is a restless artisan, weaving visions of ART in every form,
        ceaselessly, day and night. In solitude, I find clarity—a quiet alchemy
        where thoughts take shape, manifesting into the tangible. I specialize
        in crafting full-stack web applications that serve with purpose,
        designing avant-garde garments that whisper individuality, and breathing
        life into the gothic echoes of cathedrals, reviving their ancient
        splendor.
      </h4>
      <h4 className="lg:w-[80%]">
        I hold no disdain for those who revel in chatter, but I seek solace in
        profound connection. If you share a kindred spirit, I welcome you as a
        companion on this journey. Together, let us sculpt something
        extraordinary for this beautiful universe. Below lies a form—a humble
        bridge to reach me. Speak of anything; I&apos;ll lend an ear and a hand
        to guide you through.
      </h4>
      <QuestionForm />
    </div>
  );
};

export default AboutPage;
