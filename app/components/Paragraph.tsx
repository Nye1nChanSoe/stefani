import React from "react";

interface Props {
  text: string;
  uppercase?: boolean;
  bold?: boolean;
  marginTop?: number;
  marginBottom?: number;
  letterSpacing?: number;
  color?: "primary" | "white" | "background" | "brown";
  fontFamily?: "encode-sans" | "barlow" | "nunito";
}

const Paragraph = ({
  text,
  uppercase,
  bold,
  marginTop,
  marginBottom,
  letterSpacing,
  color,
  fontFamily,
}: Props) => {
  const fontClass = (() => {
    switch (fontFamily) {
      case "encode-sans":
        return "font-encode-sans-condensed";
      case "barlow":
        return "font-barlow-condensed";
      case "nunito":
        return "font-nunito";
      default:
        return "";
    }
  })();
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
      className={`text-[20px] ${uppercase ? "uppercase" : ""} ${
        bold ? "font-bold" : ""
      } ${fontClass} ${colorClass}`}
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
