import { inter, sevillana_mono } from "@/components/Font-list";

import { Cover } from "@/components/ui/cover";
import ScrollToSectionButton from "@/components/ui/Button-spark";

const HeroSection = () => {
  return (
    <div className="bg-[#F5252D] w-full min-h-screen flex flex-col justify-center items-start lg:items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-4xl w-full">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-[550] leading-tight lg:text-center">
          The Science Behind Sports:
          <br />
          <span
            className={`block mt-2 lg:text-center bg-clip-text text-transparent ${sevillana_mono.className}`}
          >
            <Cover>Unlock Your Full Potential</Cover>
          </span>
        </h1>
      </div>

      <div className={`${inter.className} py-4 max-w-4xl w-full`}>
        <h2 className="text-white text-lg sm:text-xl font-[550] leading-tight lg:text-center">
          Pelajari bagaimana sport science membantu atlet dan individu aktif
          <span className="block mt-1">
            mencapai performa terbaik melalui pendekatan berbasis
            <br className="hidden sm:inline" />
            data, ilmu pengetahuan, dan teknologi.
          </span>
        </h2>
      </div>

      <div className="my-7 lg:text-center bg-white rounded-xl">
        <ScrollToSectionButton
          className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          scrollToId="sportScienceSection"
        >
          <span>✨ Pelajari Sport Science Sekarang</span>
        </ScrollToSectionButton>
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
};

export default HeroSection;
