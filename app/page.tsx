import { WavyBackground } from "@/components/WavyBackground";
import  ParallaxText  from "@/components/ParallaxText";
export default function Home() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Gautham Krishna
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Frontend | SDE - 1 | FinTech
        </p>
      </WavyBackground>
      <ParallaxText />
    </>
  );
}
