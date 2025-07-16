import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["fast", "user-friendly", "scalable"];
  const words2 = ["React", "Node.js", "Express.js", "GraphQL"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 xs:text-center">
      <div className="text-4xl mr-auto sm:ml-auto xs:ml-auto xs:text-center font-normal text-neutral-600 dark:text-neutral-400" style={{ textAlign: "center" }}>
        Hi, I'm Gautham Krishna, a JavaScript developer passionate about building
        <FlipWords words={words} />
        web applications. I specialize in
        <br />
        <FlipWords words={words2} />
      . Whether it's crafting sleek UIs or integrating complex APIs, I love turning ideas into polished digital experiences.
      </div>
    </div>
  );
}
