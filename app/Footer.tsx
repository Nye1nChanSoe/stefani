import React from "react";
import Heading1 from "./components/Heading1";

const Footer = () => {
  return (
    <footer className="container mx-auto px-[50px] flex justify-between items-center bg-primary py-[16px]">
      <Heading1 text="Contact" color="background" />
      <div className="flex items-center gap-x-12">
        <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer">
          Whatsapp
        </p>
        <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer">
          Instagram
        </p>
        <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer">
          LinkedIn
        </p>
      </div>
    </footer>
  );
};

export default Footer;
