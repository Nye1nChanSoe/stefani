import React from "react";
import Heading1 from "../../components/Heading1";
import Paragraph from "../../components/Paragraph";
import Image from "next/image";

interface Props {
  heading: string;
  paragraph: string;
  image: any;
}

const TextSection2 = ({ heading, paragraph, image }: Props) => {
  return (
    <div className="flex justify-between items-start gap-8">
      <div className="flex-1">
        <Heading1
          text={heading}
          uppercase={true}
          fontSize={80}
          letterSpacing={5}
          marginBottom={36}
        />
        <Paragraph text={paragraph} letterSpacing={1.2} />
      </div>
      <Image
        src={image}
        alt={heading}
        className="w-[565px] h-[440px] object-cover object-top rounded-lg shrink-0"
      />
    </div>
  );
};

export default TextSection2;
