import React from "react";
import Heading1 from "./components/Heading1";
import Image from "next/image";
import Me from "../public/images/about_me.png";
import Paragraph from "./components/Paragraph";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const AboutMe = ({
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
      <div className="flex justify-between gap-8 h-[510px]">
        <Image
          src={Me}
          alt="Stefani"
          className="w-[565px] h-full rounded-lg object-cover object-bottom shrink-0"
        />
        <div className="flex-1">
          <Heading1
            text="About me"
            uppercase={true}
            letterSpacing={2.4}
            marginBottom={44}
          />
          <Paragraph
            text="I’m freelance UX/UI Designer and graduated with Master of Interaction Design from Harbour Space University @ UTCC. I’m very passionate in designing and always happy to learn how designs really work."
            letterSpacing={1.2}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
