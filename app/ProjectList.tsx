import React from "react";
import CoffeeMemory from "./(case-studies)/CoffeeMemory";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const ProjectList = ({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <CoffeeMemory />
    </section>
  );
};
