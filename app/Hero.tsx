import React from "react";
import HeroAnimatedText from "./HeroAnimatedText";
import S from "../public/images/S.jpeg";
import T from "../public/images/T.jpeg";
import E from "../public/images/E.png";
import F from "../public/images/F.jpeg";
import A from "../public/images/A.jpeg";
import N from "../public/images/N.jpeg";
import I from "../public/images/I.png";
import Heading1 from "./components/Heading1";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Hero = ({ marginTop, marginBottom, marginLeft, marginRight }: Props) => {
  return (
    <section
      className="flex flex-col h-screen items-center justify-center"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <div className="flex py-20 justify-between">
        <HeroAnimatedText text="S" imageSrc={S.src} />
        <HeroAnimatedText text="T" imageSrc={T.src} />
        <HeroAnimatedText text="E" imageSrc={E.src} />
        <HeroAnimatedText text="F" imageSrc={F.src} />
        <HeroAnimatedText text="A" imageSrc={A.src} />
        <HeroAnimatedText text="N" imageSrc={N.src} />
        <HeroAnimatedText text="I" imageSrc={I.src} />
      </div>
      <div className="flex w-full justify-between">
        <Heading1 text="UX & UI Designer" />
        <Heading1 text="Based in Bangkok" />
      </div>
    </section>
  );
};

export default Hero;
