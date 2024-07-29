import React from "react";
import { text } from "stream/consumers";

interface Props {
  hexString: string;
  textColor: string;
}

const ColorBox = ({ hexString, textColor }: Props) => {
  return (
    <div
      className="w-[150px] h-[150px] flex items-center justify-center rounded-[10px] rounded-br-[20px] uppercase"
      style={{ backgroundColor: `#${hexString}`, color: textColor }}
    >
      {hexString}
    </div>
  );
};

export default ColorBox;
