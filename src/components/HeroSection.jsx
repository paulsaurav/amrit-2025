import HeroTitleBlock from "./HeroTitleBlock";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      
      <div className="flex items-center h-full w-full">
        <div className="sm:px-10 md:px-20 lg:px-44">
          <HeroTitleBlock />
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,40 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
