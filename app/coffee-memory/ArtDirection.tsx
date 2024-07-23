import React from "react";
import Heading1 from "../components/Heading1";
import Image from "next/image";

import LogoDesign from "../../public/images/logo_design.jpeg";
import ColorPalette from "../../public/images/color_palette.jpeg";

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
      <Heading1
        text="Art Direction"
        uppercase={true}
        letterSpacing={2.2}
        marginBottom={34}
      />
      <div className="flex justify-between items-start gap-8">
        <Image
          src={LogoDesign}
          alt="Logo Design"
          className="w-[565px] h-[426px] rounded-lg shrink-0"
        />
        <Image
          src={ColorPalette}
          alt="Color Palette"
          className="w-[565px] h-[426px] rounded-lg shrink-0"
        />
      </div>
    </section>
  );
};

export default ArtDirection;
