import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
  color?: "primary" | "white" | "background" | "brown";
  fontFamily?: "open-sans" | "barlow";
}

const Paragraph = ({
  text,
  uppercase,
  marginTop,
  marginBottom,
  letterSpacing,
  color,
}: Props) => {
  const colorClass = (() => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "background":
        return "text-background";
      case "brown":
        return "text-brown";
      default:
        return "text-white";
    }
  })();

  return (
    <p
      className={`text-[20px] font-open-sans font-bold leading-8 text-justify ${
        uppercase ? "uppercase" : ""
      } ${colorClass}`}
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

export default Paragraph;
