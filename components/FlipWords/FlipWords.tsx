import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo({ TEXTS }: { TEXTS: { txt1: string, txt2: string, txt3: string } }) {
  const words = ["fast", "user-friendly", "scalable"];
  const words2 = ["React", "Node.js", "Express.js", "GraphQL"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 xs:text-center">
      <div className="text-4xl mr-auto sm:ml-auto xs:ml-auto xs:text-center font-normal text-neutral-600 dark:text-neutral-400" style={{ textAlign: "center" }}>
        {TEXTS.txt1}
        <FlipWords words={words} />
        {TEXTS.txt2}
        <br />
        <FlipWords words={words2} />
        {TEXTS.txt3}
      </div>
    </div>
  );
}
