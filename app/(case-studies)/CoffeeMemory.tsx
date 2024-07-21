import React from "react";
import Image from "next/image";
import Img from "../../public/images/coffee_memory.jpeg";
import Heading1 from "../components/Heading1";
import Heading3 from "../components/Heading3";
import Paragraph from "../components/Paragraph";
import Link from "next/link";

const CoffeeMemory = () => {
  return (
    <div id="coffee-memory" className="flex justify-between items-start gap-8">
      <Image
        src={Img}
        alt="Coffee Memory"
        className="w-[565px] h-[426px] rounded-lg shrink-0"
      />
      <div className="flex-1">
        <Heading1
          text="Coffee Memory"
          uppercase={true}
          letterSpacing={4.4}
          marginBottom={7}
        />
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
          <Link
            className="px-[10px] py-[10px] rounded-[8px] tracking-wider bg-primary text-white font-encode-sans-condensed shadow-md text-[20px] font-bold focus:outline-none transition-all duration-500 hover:scale-105 hover:text-background"
            href="/coffee-memory"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMemory;
