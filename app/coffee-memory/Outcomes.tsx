import React from "react";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const TheThingsTwo = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      className="space-y-[160px]"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <SectionFlexContainer
        left={
          <Heading1
            text="Feedback"
            uppercase={true}
            fontSize={40}
            letterSpacing={2.2}
          />
        }
        right={
          <Paragraph
            text="To continually improve Coffee Memory, we prioritize user feedback. Users can provide feedback directly through the app or website, participate in regular surveys, and engage in community forums. Additionally, we host focus groups and beta testing sessions to gather in-depth insights. Coffee shop partners can share their experiences and suggestions via dedicated communication channels. This feedback helps us refine features, enhance user experience, and ensure Coffee Memory meets the needs of both coffee shops and their patrons."
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        left={
          <Heading1
            text="Reflection"
            uppercase={true}
            fontSize={40}
            letterSpacing={2.2}
          />
        }
        right={
          <Paragraph
            text="The Coffee Memory project effectively addresses the need for clean, digital note-sharing in coffee shops. With its user-friendly interface and features like visual note-sharing and reviews, it enhances the coffee shop experience while preserving the charm of personal interactions. Overall, it provides a unique, practical solution tailored to the needs of coffee shop environments."
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        left={
          <Heading1
            text="TeamWork"
            uppercase={true}
            fontSize={40}
            letterSpacing={2.2}
          />
        }
        right={
          <Paragraph
            text="We work together as a team and also listen to the other team members who are front-end developers. We even check on each other's work and make sure the design is good enough. After that, we move on to the next task of the design process."
            letterSpacing={1.2}
          />
        }
      />
    </section>
  );
};

export default TheThingsTwo;
