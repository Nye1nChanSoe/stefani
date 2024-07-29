import React from "react";
import Heading1 from "../components/Heading1";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Heading2 from "../components/Heading2";
import Paragraph from "../components/Paragraph";
import Image from "next/image";

import Emma from "../../public/images/emma.png";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const PrimaryPersona = ({
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
        left={
          <Heading1
            text="Primary Persona"
            uppercase={true}
            fontSize={40}
            letterSpacing={2.2}
            marginBottom={34}
          />
        }
        right={
          <div className="space-y-[44px]">
            <Heading2
              text="Emma, The Coffee Shop Regular"
              uppercase={true}
              marginBottom={44}
              letterSpacing={1.7}
            />
            <div className="flex items-center gap-x-7">
              <Image
                src={Emma}
                alt="Emma"
                className="w-[250px] h-[250px] rounded-full shrink-0 object-cover"
              />
              <Paragraph
                text={`"I love leaving and reading notes, but wish there was a cleaner way to keep this tradition."`}
                letterSpacing={1.2}
                bold={true}
              />
            </div>
            <p
              className="text-[20px] font-open-sans leading-[30px]"
              style={{ letterSpacing: "1.2px" }}
            >
              <span className="font-bold mr-11 uppercase">Pain Point</span>:
              Emma loves reading and leaving notes in her favorite coffee shop
              but dislikes the clutter and mess on the walls.
            </p>
            <p
              className="text-[20px] font-open-sans leading-[30px]"
              style={{ letterSpacing: "1.2px" }}
            >
              <span className="font-bold mr-2 uppercase">Workaround</span>: Emma
              loves reading and leaving notes in her favorite coffee shop but
              dislikes the clutter and mess on the walls.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default PrimaryPersona;
