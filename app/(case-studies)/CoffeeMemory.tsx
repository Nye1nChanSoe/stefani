import React from "react";
import Image from "next/image";
import Img from "../../public/images/coffee_memory.jpeg";
import Heading1 from "../components/Heading1";
import Heading3 from "../components/Heading3";
import Paragraph from "../components/Paragraph";
import Link from "next/link";

interface Props {
  id?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const CoffeeMemory = ({
  id,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <div
      id={id}
      className="flex justify-between items-start gap-8 h-[430px]"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <Image
        src={Img}
        alt="Coffee Memory"
        className="w-[565px] h-full object-cover rounded-lg shrink-0"
      />
      <div className="flex-1 h-full flex flex-col justify-between">
        <div>
          <Heading1
            text="Coffee Memory"
            uppercase={true}
            letterSpacing={2.2}
            marginBottom={16}
          />
          <Heading3 text="UX Design, UI, Research" />
        </div>
        <Paragraph
          text="Coffee Memory preserves the memorable notes without the mess, helping coffee shops and people create lasting memories without dirtying walls."
          letterSpacing={1.2}
        />
        <Link
          className="w-fit px-[30px] py-[16px] rounded-lg tracking-wider bg-primary text-white font-open-sans shadow-md text-[20px] font-bold focus:outline-none transition-all duration-500 hover:scale-105 hover:text-background"
          href="/coffee-memory"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default CoffeeMemory;
