import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import Heading2 from "../components/Heading2";
import Image from "next/image";

import TableAnalysis from "../../public/images/table.jpeg";

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
      className="space-y-[60px]"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <Heading1
        text="Competitor Analysis"
        uppercase={true}
        fontSize={70}
        letterSpacing={5}
      />
      <Paragraph
        text="Competitor analysis helps Coffee Memory identify market gaps and opportunities by understanding existing solutions, allowing us to create a unique and improved user experience."
        letterSpacing={1.2}
      />

      <div>
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
      <div>
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
      <Image src={TableAnalysis} alt="Analysis Table" className="rounded-lg" />
      <div>
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
      </div>
    </section>
  );
};

export default CompetitorAnalysis;
