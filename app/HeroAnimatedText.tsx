import React from "react";

interface Props {
  text: string;
}

// TODO: add video background
// TODO: add outline width and color
const HeroAnimatedText = ({ text }: Props) => {
  return (
    <div className="inline-block leading-none p-0 m-0 text-[260px] font-bold text-primary font-barlow-condensed">
      {text}
    </div>
  );
};

export default HeroAnimatedText;
