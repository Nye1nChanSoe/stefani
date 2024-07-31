import React from "react";
import Heading1 from "./components/Heading1";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-[16px]">
      <div className="container px-[50px] mx-auto flex justify-between items-center">
        <Heading1 text="Contact" color="background" />
        <div className="flex items-center gap-x-12">
          <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer transition-colors duration-500 hover:text-background">
            Whatsapp
          </p>
          <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer transition-colors duration-500 hover:text-background">
            Instagram
          </p>
          <p className="text-[30px] font-open-sans font-bold leading-8 cursor-pointer transition-colors duration-500 hover:text-background">
            LinkedIn
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
