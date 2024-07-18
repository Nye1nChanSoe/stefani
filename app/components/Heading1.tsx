import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
}

const Heading1 = ({
  text,
  uppercase,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <h1
      className={`text-[32px] font-bold font-encode-sans-condensed ${
        uppercase ? "uppercase" : ""
      }`}
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
