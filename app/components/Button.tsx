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
      className="px-4 py-2 rounded-[10px] bg-primary text-white font-encode-sans-condensed shadow-md text-[18px] font-bold focus:outline-none transition-all duration-500 hover:scale-105 hover:text-background"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
