import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
}

const Quote = ({
  text,
  uppercase,
  marginTop,
  marginBottom,
  letterSpacing,
}: Props) => {
  return (
    <p
      className={`font-nunito text-[20px] text-primary ${
        uppercase ? "uppercase" : ""
      }`}
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
      }}
    >
      {text}
    </p>
  );
};

export default Quote;
