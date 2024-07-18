"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CoffeeMemory from "../public/coffee_memory.jpeg";
import Button from "./components/Button";
import Heading1 from "./components/Heading1";
import Heading3 from "./components/Heading3";
import Paragraph from "./components/Paragraph";

export const ProjectList = () => {
  const router = useRouter();

  return (
    <section className="flex justify-between items-start mt-24 gap-20 mb-[94px]">
      <Image
        src={CoffeeMemory}
        alt="Coffee Memory"
        className="w-[545px] h-[406px] rounded-lg shrink-0"
      ></Image>
      <div>
        <Heading1 text="Coffee Memory" uppercase={true} letterSpacing={4.4} marginBottom={16} />
        <Heading3 text="UX Design, UI, Research" />
        <Paragraph
          text="Coffee Memory preserves the memorable notes people write on coffee shop walls without the mess."
          marginTop={24}
          marginBottom={24}
          letterSpacing={3.36}
        />
        <Paragraph
          text="The website helps both coffee shops and people to make memories without having dirty walls and keeping the notes memorable."
          marginBottom={32}
          letterSpacing={3.36}
        />
        <div className="flex justify-end">
          <Button
            text="View Case Study"
            onClick={() => router.push("/projects")}
          />
        </div>
      </div>
    </section>
  );
};
