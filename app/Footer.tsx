import React from "react";
import Paragraph from "./components/Paragraph";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center font-encode-sans-condensed bg-primary pt-[33px] pb-[13px]">
      <div className="flex flex-col items-center gap-[15px]">
        <div className="w-[578px] flex justify-between">
          <div className="flex flex-col items-center gap-[24px]">
            <Paragraph
              text="Get in Touch"
              color="background"
              fontFamily="encode-sans"
              letterSpacing={2.4}
              bold={true}
            />
            <Paragraph
              text="Whatsapp"
              fontFamily="encode-sans"
              letterSpacing={1.2}
            />
            <Paragraph
              text="+66 957540335"
              fontFamily="encode-sans"
              letterSpacing={1.2}
            />
          </div>
          <div className="flex flex-col items-center gap-[24px]">
            <Paragraph
              text="Contact"
              color="background"
              fontFamily="encode-sans"
              letterSpacing={2.4}
              bold={true}
            />
            <Paragraph
              text="LinkedIn"
              fontFamily="encode-sans"
              letterSpacing={1.2}
            />
            <Paragraph
              text="Instagram"
              fontFamily="encode-sans"
              letterSpacing={1.2}
            />
            <Paragraph
              text="Facebook"
              fontFamily="encode-sans"
              letterSpacing={1.2}
            />
          </div>
        </div>
        <Paragraph
          text={`${new Date().getFullYear()} Edition`}
          letterSpacing={2.4}
          bold={true}
          fontFamily="encode-sans"
        />
      </div>
    </footer>
  );
};

export default Footer;
