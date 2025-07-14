import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mr-auto sm:ml-auto xs:ml-auto xs:text-center font-normal text-neutral-600 dark:text-neutral-400">
        Be
        <FlipWords words={words} /> <br />
        like me!
      </div>
    </div>
  );
}
