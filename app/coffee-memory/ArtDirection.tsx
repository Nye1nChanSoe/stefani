import React from "react";
import Heading1 from "../components/Heading1";
import Image from "next/image";

import LogoDesign from "../../public/images/logo_design.png";
import ColorPalette from "../../public/images/color_palette.png";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Paragraph from "../components/Paragraph";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const ArtDirection = ({
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
          <div className="space-y-[44px]">
            <Heading1
              text="Art Direction"
              uppercase={true}
              fontSize={54}
              letterSpacing={2.7}
              marginBottom={34}
            />
            <Image src={LogoDesign} alt="Logo Design" className="rounded-lg" />
            <Image
              src={ColorPalette}
              alt="Color Palette"
              className="rounded-lg"
            />
          </div>
        }
        right={
          <Paragraph
            text="Art direction ensures a cohesive and visually appealing experience for Coffee Memory, reflecting the inviting atmosphere of coffee shops. It creates a consistent aesthetic, making the platform intuitive and engaging, helping it stand out and resonate with users."
            letterSpacing={1.2}
          />
        }
      />
    </section>
  );
};

export default ArtDirection;
