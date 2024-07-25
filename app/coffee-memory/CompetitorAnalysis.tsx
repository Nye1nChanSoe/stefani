import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import Heading2 from "../components/Heading2";
import Image from "next/image";

import TableAnalysis from "../../public/images/table.jpeg";
import SectionFlexContainer from "./(components)/SectionFlexContainer";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const CompetitorAnalysis = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <SectionFlexContainer
        marginBottom={94}
        left={
          <Heading1
            text="Competitor Analysis"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.4}
          />
        }
        right={
          <>
            <Paragraph
              text="Competitor analysis helps Coffee Memory identify market gaps and opportunities by understanding existing solutions, allowing us to create a unique and improved user experience."
              letterSpacing={1.2}
              marginBottom={44}
            />
            <div className="mb-[44px]">
              <Heading2
                text="Evernote"
                uppercase={true}
                letterSpacing={1.7}
                marginBottom={20}
              />
              <Paragraph
                text="Evernote is a note-taking app that helps users organize their thoughts, tasks, and projects in a digital format. It offers features like text notes, web clipping, document scanning, and task management."
                letterSpacing={1.2}
              />
            </div>
            <div className="mb-[44px]">
              <Heading2
                text="Padlet"
                uppercase={true}
                letterSpacing={1.7}
                marginBottom={20}
              />
              <Paragraph
                text="Padlet is an online collaboration tool that allows users to create and share interactive boards. It supports various types of content including text, images, videos, and links."
                letterSpacing={1.2}
              />
            </div>
            <div>
              <Heading2
                text="Miro"
                uppercase={true}
                letterSpacing={1.7}
                marginBottom={20}
              />
              <Paragraph
                text="Miro is an online collaborative whiteboard platform designed for team brainstorming and project management. It offers a wide range of tools for creating mind maps, flowcharts, and diagrams."
                letterSpacing={1.2}
              />
            </div>
          </>
        }
      />
      <Image src={TableAnalysis} alt="Analysis Table" className="rounded-lg" />
      <SectionFlexContainer
        marginTop={94}
        left={<></>}
        right={
          <>
            <Heading2
              text="Key Takeaway"
              uppercase={true}
              letterSpacing={1.7}
              marginBottom={20}
            />
            <Paragraph
              text="Evernote, Padlet, and Miro have useful note-sharing features but aren't designed for coffee shops and lack personal note-sharing and review options. Coffee Memory, however, is tailored for coffee shops with a user-friendly interface, visual note-sharing, and features for personal notes and reviews, making it a better fit for this niche."
              letterSpacing={1.2}
            />
          </>
        }
      />
    </section>
  );
};

export default CompetitorAnalysis;
