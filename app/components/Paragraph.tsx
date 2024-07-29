import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
  color?: "primary" | "white" | "background" | "brown";
  fontFamily?: "open-sans" | "barlow";
  bold?: boolean;
}

const Paragraph = ({
  text,
  uppercase,
  marginTop,
  marginBottom,
  letterSpacing,
  color,
  bold,
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
      className={`text-[20px] font-open-sans leading-[30px] ${
        uppercase ? "uppercase" : ""
      } ${bold ? "font-bold" : "font-normal"} ${colorClass}`}
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
