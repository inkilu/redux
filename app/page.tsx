import { WavyBackground } from "@/components/WavyBackground";
import ParallaxText from "@/components/ParallaxText";
// import { TracingBeamDemo } from "@/components/TracingBeam/TracingBeam";
import { SparklesPreview } from "@/components/SparklesPreview/SparklesPreview";
import { Meteors } from "@/components/MeteorsDemo/ui/meteors";
import { WobbleCardDemo } from "@/components/WobbleCard/WobbleCard";
import MeSection from "@/components/MeSection/MeSection";
import ClientOnly from "@/components/ClientOnly";
export default function Home() {
  return (
    <>
         <div className="relative w-full h-100 overflow-hidden z-10">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Gautham Krishna M
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
           Building secure and scalable fintech platforms
          </p>
        </WavyBackground>
        <ClientOnly><Meteors/></ClientOnly>
        </div>
        <MeSection />
        <ParallaxText />
        <div className="mt-40">
        {/* <WobbleCardDemo /> */}
        </div>
        <SparklesPreview heading="About Me" />
      {/* <TracingBeamDemo>
      </TracingBeamDemo> */}
    </>
  );
}
