import React from "react";
import BannerImage from "../../public/images/coffee_memory_bg_banner.png";
import Link from "next/link";
import BannerText from "./(components)/BannerText";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Heading2 from "../components/Heading2";
import Paragraph from "../components/Paragraph";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Banner = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      className="h-[880px] bg-cover"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: "no-repeat",
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <div className="container mx-auto px-[50px] pt-[50px] pb-[100px] h-full flex flex-col justify-between">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="42"
            viewBox="0 0 25 42"
            className="fill-white transition-colors duration-500 hover:fill-primary"
          >
            <path d="M21.2314 42L0 21L21.2314 0L25 3.7275L7.53715 21L25 38.2725L21.2314 42Z" />
          </svg>
        </Link>
        <div className="flex flex-col gap-y-10">
          <SectionFlexContainer
            left={<BannerText text="Coffee Memory" />}
            right={<></>}
          />
          <SectionFlexContainer
            left={
              <Paragraph
                text="Coffee Memory preserves memorable coffee shop notes digitally, keeping walls clean and memories intact."
                letterSpacing={1.2}
              />
            }
            right={<></>}
          />
          <SectionFlexContainer
            left={
              <div className="flex flex-col gap-3">
                <Heading2 text="Tools" uppercase={true} />
                <Paragraph text="Figma" letterSpacing={1.2} />
              </div>
            }
            right={
              <div className="flex flex-col gap-3">
                <Heading2 text="Duration" uppercase={true} />
                <Paragraph text="1 month" letterSpacing={1.2} />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
