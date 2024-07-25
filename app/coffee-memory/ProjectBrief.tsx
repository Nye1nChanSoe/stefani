import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Image from "next/image";

import UserInterview from "../../public/images/user_interview.png";

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
            text="The Ask"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <Paragraph
            text={`We seek support to develop "Coffee Memory", 
a digital solution that preserves the memorable notes people write in coffee shops, eliminating the mess while keeping the tradition alive. Our goal is to create a website/app that allows users to share and view these notes virtually, enhancing the coffee shop experience without dirtying walls.`}
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        left={
          <Heading1
            text="The Problem"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <Paragraph
            text="Traditional note-sharing in coffee shops creates cluttered and dirty walls, detracting from the ambiance and requiring frequent cleaning. While people love leaving and reading these personal messages, the physical method is unsustainable and impractical. Coffee shops need a way to preserve this cherished practice without compromising cleanliness and aesthetics."
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        left={
          <Heading1
            text="The Solution"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <Paragraph
            text="Coffee Memory provides a digital platform for creating, sharing, and reading notes, preserving the tradition of coffee shop messages without the mess, ensuring clean and inviting spaces."
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        left={
          <Heading1
            text="User Research"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <Paragraph
            text="For Coffee Memory, we conducted surveys, interviews, and observations in coffee shops to understand user interactions with note-sharing. We identified key needs, such as preserving memories and ease of use. This research informed our digital platform's design and functionality, ensuring it meets the expectations of both patrons and owners."
            letterSpacing={1.2}
          />
        }
      />
      <div>
        <Heading1
          text="User Interview"
          uppercase={true}
          fontSize={46}
          letterSpacing={5}
          marginBottom={44}
        />
        <SectionFlexContainer
          alignItems="center"
          left={
            <>
              <Image
                src={UserInterview}
                alt="User Interview"
                className="rounded-lg shrink-0"
              />
            </>
          }
          right={
            <Paragraph
              text="We conducted interviews with coffee shop patrons and owners to understand their preferences for note-sharing. They expressed a desire to preserve memories without clutter. This feedback helped shape Coffee Memory's features and design to enhance user experience."
              letterSpacing={1.2}
            />
          }
        />
      </div>
      <SectionFlexContainer
        left={
          <Heading1
            text="Key Features"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <Paragraph
            text="Coffee Memory allows users to create, share, and read digital notes, preserving memories without cluttering walls. Key features include 
a virtual wall display, search and filter options, multimedia support, privacy controls, coffee shop integration, notifications, and community interaction through likes and comments."
            letterSpacing={1.2}
          />
        }
      />
    </section>
  );
};

export default ProjectBrief;
