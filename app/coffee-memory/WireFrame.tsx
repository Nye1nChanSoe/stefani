import Image from "next/image";
import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";

import SectionFlexContainer from "./(components)/SectionFlexContainer";
import WF1 from "../../public/images/wf_1.jpeg";
import WF2 from "../../public/images/wf_2.jpeg";
import WF3 from "../../public/images/wf_3.jpeg";
import WF4 from "../../public/images/wf_4.jpeg";
import WF5 from "../../public/images/wf_5.jpeg";
import WF6 from "../../public/images/wf_6.jpeg";

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
            fontSize={40}
            letterSpacing={2.2}
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
      <div className="flex gap-x-10">
        <div className="flex flex-col gap-y-10">
          <Image
            src={WF1}
            alt="Wireframe 1"
            className="flex-1 object-cover rounded-lg"
          />
          <Image
            src={WF2}
            alt="Wireframe 2"
            className="flex-1 object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src={WF3}
            alt="Wireframe 3"
            className="object-cover h-full rounded-lg"
          />
        </div>
        <div className="">
          <Image
            src={WF4}
            alt="Wireframe 4"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-10">
          <Image src={WF5} alt="Wireframe 5" className="rounded-lg" />
          <Image src={WF6} alt="Wireframe 6" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default WireFrame;
