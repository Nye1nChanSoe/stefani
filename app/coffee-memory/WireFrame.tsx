import Image from "next/image";
import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";

import Wireframes from "../../public/images/wireframes.png";
import SectionFlexContainer from "./(components)/SectionFlexContainer";

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
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <SectionFlexContainer
        marginBottom={94}
        left={
          <Heading1
            text="Wireframes"
            uppercase={true}
            fontSize={54}
            letterSpacing={2.7}
            marginBottom={34}
          />
        }
        right={
          <Paragraph
            text="After finishing up the user flow, these are the wireframes screen designs that we’ve worked on. In these wireframes, we include sign up form, home screen, token number screen, notes screen, review screen, and also review screen."
            letterSpacing={1.2}
          />
        }
      />
      <Image src={Wireframes} alt="Wireframes" className="rounded-lg" />
    </section>
  );
};

export default WireFrame;
