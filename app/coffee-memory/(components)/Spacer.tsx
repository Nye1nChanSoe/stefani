import React from "react";

interface Props {
  children: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  x?: number;
  y?: number;
}

const Spacer = ({
  children,
  y,
  x,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  const gapX = x ? `space-x-[${x}px]` : "";
  const gapY = y ? `space-y-[${y}px]` : "";

  return (
    <div
      className={`${gapX} ${gapY}`}
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Spacer;
