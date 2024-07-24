import React from "react";
import TextSection1 from "./(components)/TextSection1";
import TextSection2 from "./(components)/TextSection2";
import UserInterview from "../../public/images/user_interview.png";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import Heading2 from "../components/Heading2";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const ProjectBrief = ({
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
      <div className="flex justify-between items-start gap-8">
        <div className="flex-1">
          <Heading1
            text="Overview"
            uppercase={true}
            fontSize={80}
            letterSpacing={5}
          />
        </div>
        <div className="flex-1">
          <Paragraph
            text="Coffee Memory preserves the memorable notes people write on coffee shop walls without the mess. The website will help both coffee shops and people to make memories without having dirty walls and keeping the notes memorable."
            letterSpacing={1.2}
          />
          <div className="mt-10 flex justify-between">
            <div>
              <Heading2
                text="Tools"
                uppercase={true}
                letterSpacing={1.7}
                marginBottom={10}
              />
              <Paragraph text="Figma" letterSpacing={1.2} />
            </div>
            <div className="mr-10">
              <Heading2
                text="Duration"
                uppercase={true}
                letterSpacing={1.7}
                marginBottom={10}
              />
              <Paragraph text="1 month" letterSpacing={1.2} />
            </div>
          </div>
        </div>
      </div>
      <TextSection1
        heading="The Ask"
        paragraph={`We seek support to develop "Coffee Memory", a digital solution that preserves the memorable notes people write in coffee shops, eliminating the mess while keeping the tradition alive. Our goal is to create a website/app that allows users to share and view these notes virtually, enhancing the coffee shop experience without dirtying walls.`}
      />
      <TextSection1
        heading="The Problem"
        paragraph={`Traditional note-sharing in coffee shops creates cluttered and dirty walls, detracting from the ambiance and requiring frequent cleaning. While people love leaving and reading these personal messages, the physical method is unsustainable and impractical. Coffee shops need a way to preserve this cherished practice without compromising cleanliness and aesthetics.`}
      />
      <TextSection1
        heading="The Solution"
        paragraph="Coffee Memory provides a digital platform for creating, sharing, and reading notes, preserving the tradition of coffee shop messages without the mess, ensuring clean and inviting spaces."
      />
      <TextSection1
        heading="User Research"
        paragraph="For Coffee Memory, we conducted surveys, interviews, and observations in coffee shops to understand user interactions with note-sharing. We identified key needs, such as preserving memories and ease of use. This research informed our digital platform's design and functionality, ensuring it meets the expectations of both patrons and owners."
      />
      <TextSection2
        heading="User Interview"
        paragraph="We conducted interviews with coffee shop patrons and owners to understand their preferences for note-sharing. They expressed a desire to preserve memories without clutter. This feedback helped shape Coffee Memory's features and design to enhance user experience."
        image={UserInterview}
      />
      <TextSection1
        heading="Key Features"
        paragraph="Coffee Memory allows users to create, share, and read digital notes, preserving memories without cluttering walls. Key features include 
a virtual wall display, search and filter options, multimedia support, privacy controls, coffee shop integration, notifications, and community interaction through likes and comments."
      />
    </div>
  );
};

export default ProjectBrief;
