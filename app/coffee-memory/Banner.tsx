import React from "react";
import BannerImage from "../../public/images/coffee_memory_bg_banner.png";
import Link from "next/link";

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
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <div className="container mx-auto px-[50px] py-[40px] h-full flex flex-col justify-between">
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
        <div className="text-[170px] font-barlow-condensed font-bold tracking-wider uppercase leading-none">
          Coffee
          <br />
          Memory
        </div>
      </div>
    </section>
  );
};

export default Banner;
