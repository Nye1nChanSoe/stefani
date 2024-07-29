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

const Heading1 = ({
  text,
  uppercase,
  fontSize,
  color,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <h1
      className={`text-[44px] font-bold font-open-sans leading-normal ${
        uppercase ? "uppercase" : ""
      } text-${color}`}
      style={{
        fontSize: fontSize ? `${fontSize}px` : "40px",
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
      }}
    >
      {text}
    </h1>
  );
};

export default Heading1;
