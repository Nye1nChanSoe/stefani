import React from "react";
import HeroAnimatedText from "./HeroAnimatedText";
import S from "../public/images/S.jpeg";
import T from "../public/images/T.jpeg";
import E from "../public/images/E.png";
import F from "../public/images/F.jpeg";
import A from "../public/images/A.png";
import N from "../public/images/N.jpeg";
import I from "../public/images/I.png";

const Hero = () => {
  return (
    <section className="flex justify-between gap-0">
      <HeroAnimatedText text="S" imageSrc={S.src} />
      <HeroAnimatedText text="T" imageSrc={T.src} />
      <HeroAnimatedText text="E" imageSrc={E.src} />
      <HeroAnimatedText text="F" imageSrc={F.src} />
      <HeroAnimatedText text="A" imageSrc={A.src} />
      <HeroAnimatedText text="N" imageSrc={N.src} />
      <HeroAnimatedText text="I" imageSrc={I.src} />
    </section>
  );
};

export default Hero;
