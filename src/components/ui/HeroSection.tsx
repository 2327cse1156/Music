import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative mx-auto overflow-hidden py-10 md:py-0">
      HeroSection
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Unlock Your Musical Potential</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Whether you're a beginner looking to explore the world of music or an
          advanced musician honing your craft, our expertly designed courses
          will guide you every step of the way. From mastering your instrument
          to diving into music production and theory, we offer something for
          every musician. Start your musical journey today and discover the
          harmony between creativity and skill.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
