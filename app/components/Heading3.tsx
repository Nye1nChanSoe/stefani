import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
}

const Heading3 = ({
  text,
  uppercase,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <h3
      className={`text-[20px] font-open-sans font-bold ${
        uppercase ? "uppercase" : ""
      }`}
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
      }}
    >
      {text}
    </h3>
  );
};

export default Heading3;
