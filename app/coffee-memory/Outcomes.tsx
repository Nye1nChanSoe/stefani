import React from "react";
import TextSection1 from "./(components)/TextSection1";
import TextSection2 from "./(components)/TextSection2";

import TeamWork from "../../public/images/teamwork.png";

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
    <div
      className="space-y-[160px]"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <TextSection1
        heading="Usability Testing"
        paragraph={`User testing showed that Coffee Memory's digital note-sharing is valued for its cleanliness and ease of use. Users liked the virtual wall display and multimedia features but suggested improvements in search functionality and customization. Overall, the platform effectively enhances the note-sharing experience.`}
      />
      <TextSection1
        heading="Feedback"
        paragraph={`To continually improve Coffee Memory, we prioritize user feedback. Users can provide feedback directly through the app or website, participate in regular surveys, and engage in community forums. Additionally, we host focus groups and beta testing sessions to gather in-depth insights. Coffee shop partners can share their experiences and suggestions via dedicated communication channels. This feedback helps us refine features, enhance user experience, and ensure Coffee Memory meets the needs of both coffee shops and their patrons.`}
      />
      <TextSection1
        heading="Reflection"
        paragraph={`The Coffee Memory project effectively addresses the need for clean, digital note-sharing in coffee shops. With its user-friendly interface and features like visual note-sharing and reviews, it enhances the coffee shop experience while preserving the charm of personal interactions. Overall, it provides a unique, practical solution tailored to the needs of coffee shop environments.`}
      />
      <TextSection2
        heading="Team Work"
        paragraph="We work together as a team and also listen to the other team members who are front-end developers. We even check on each other's work and make sure the design is good enough. After that, we move on to the next task of the design process."
        image={TeamWork}
      />
    </div>
  );
};

export default TheThingsTwo;
