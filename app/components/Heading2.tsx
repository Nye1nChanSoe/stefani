import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  fontSize?: number;
  color?: "background" | "white" | "primary";
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
}

const Heading2 = ({
  text,
  uppercase,
  color,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <h2
      className={`text-[28px] font-bold font-open-sans leading-normal ${
        uppercase ? "uppercase" : ""
      } text-${color}`}
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
      }}
    >
      {text}
    </h2>
  );
};

export default Heading2;
