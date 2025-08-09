
import { WavyBackground } from "@/components/WavyBackground";
import ParallaxText from "@/components/ParallaxText";
import { Meteors } from "@/components/MeteorsDemo/ui/meteors";
import MeSection from "@/components/MeSection/MeSection";
import ClientOnly from "@/components/ClientOnly";
import GalaxySection from "@/components/Galaxy/GalaxySection";
import Expandable from "@/components/Expandable/Expandable";

export default async function Home() {
  return (
    <>
      <div className="relative w-full h-[650px] overflow-hidden z-10 mb-60">
        <WavyBackground className="max-w-4xl mx-auto pb-16" >
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Gautham Krishna M
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Building secure and scalable fintech platforms
          </p>
        </WavyBackground>
        <ClientOnly><Meteors /></ClientOnly>
      </div>
      <MeSection />
      <ParallaxText />
      <GalaxySection />
    </>
  );
}
