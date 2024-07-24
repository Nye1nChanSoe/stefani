import Image from "next/image";
import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";

import Wireframes from "../../public/images/wireframes.jpeg";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const WireFrame = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      className="flex justify-between items-start gap-8"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <Image
        src={Wireframes}
        alt="Wireframes"
        className="w-[565px] h-[426px] rounded-lg shrink-0"
      />
      <div className="flex-1">
        <Heading1
          text="Wireframes"
          uppercase={true}
          fontSize={70}
          letterSpacing={4.4}
          marginBottom={34}
        />
        <Paragraph
          text="After finishing up the user flow, these are the wireframes screen designs that we’ve worked on. In these wireframes, we include sign up form, home screen, token number screen, notes screen, review screen, and also review screen."
          marginBottom={24}
          letterSpacing={1.2}
        />
      </div>
    </section>
  );
};

export default WireFrame;
