import React from "react";
import clsx from "clsx";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  alignItems?: "start" | "center" | "end" | "stretch";
}

const SectionFlexContainer = ({
  left,
  right,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  justifyContent = "start",
  alignItems = "start",
}: Props) => {
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <section
      className={clsx(
        "flex gap-x-8",
        justifyClasses[justifyContent],
        alignClasses[alignItems]
      )}
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <div className="flex-1">{left}</div>
      <div className="flex-1">{right}</div>
    </section>
  );
};

export default SectionFlexContainer;
