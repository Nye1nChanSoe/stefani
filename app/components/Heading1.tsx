import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  color?: "background" | "white" | "primary";
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
}

const Heading1 = ({
  text,
  uppercase,
  color,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <h1
      className={`text-[40px] font-bold font-open-sans ${
        uppercase ? "uppercase" : ""
      } text-${color}`}
      style={{
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
