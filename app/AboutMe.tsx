import React from "react";
import Heading1 from "./components/Heading1";
import Image from "next/image";
import Me from "../public/about_me.png";
import Paragraph from "./components/Paragraph";
import Quote from "./components/Quote";

const AboutMe = () => {
  return (
    <section className="mb-[94px]">
      <Heading1 text="About me" uppercase={true} letterSpacing={4.4} />
      <div className="flex justify-between items-center mt-[64px] gap-20">
        <Image
          src={Me}
          alt="Stefani"
          className="w-[545px] h-[520px] rounded-lg shrink-0"
        ></Image>

        <div>
          <Paragraph
            text="I’m freelance UX/UI Designer and graduated with Master of Interaction Design from Harbour Space University @ UTCC. I’m very passionate in designing and always happy to learn how designs really work."
            marginBottom={32}
            letterSpacing={2.4}
          />
          <Quote
            text='"Design is not just what it looks like and feels like. Design is how it works."'
            letterSpacing={2.4}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
