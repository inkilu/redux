"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image'
export function ProfileCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[30rem]  rounded-xl p-3 border  ">
        <CardItem translateZ="100" className="w-full ">
          <Image
            src='/catto.jpg'
            height="200"
            width="200"
            className="h-fit w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          Hwllo
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
