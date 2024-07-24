import React from "react";
import Heading1 from "../../components/Heading1";
import Paragraph from "../../components/Paragraph";

interface Props {
  heading: string;
  paragraph: string;
}

const TextSection1 = ({ heading, paragraph }: Props) => {
  return (
    <div className="flex justify-between items-start gap-8">
      <div className="flex-1">
        <Heading1
          text={heading}
          uppercase={true}
          fontSize={70}
          letterSpacing={5}
        />
      </div>
      <div className="flex-1">
        <Paragraph text={paragraph} letterSpacing={1.2} />
      </div>
    </div>
  );
};

export default TextSection1;
