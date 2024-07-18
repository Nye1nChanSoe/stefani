"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-[10px] py-[10px] rounded-[8px] tracking-wider bg-primary text-white font-encode-sans-condensed shadow-md text-[20px] font-bold focus:outline-none transition-all duration-500 hover:scale-105 hover:text-background"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
