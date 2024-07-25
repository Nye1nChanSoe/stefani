import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import Image from "next/image";

import Authentication from "../../public/images/auth.jpeg";
import LandingPage from "../../public/images/coffee_memory_landing.jpeg";
import Notes from "../../public/images/coffee_memory_notes.jpeg";
import Token from "../../public/images/coffee_memory_token.jpeg";
import Review from "../../public/images/coffee_memory_reviews.jpeg";
import SectionFlexContainer from "./(components)/SectionFlexContainer";
import Heading2 from "../components/Heading2";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const UIDesigns = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      className="space-y-[94px]"
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
            text="UI DESIGNS"
            uppercase={true}
            fontSize={46}
            letterSpacing={2.7}
          />
        }
        right={
          <Paragraph
            text="When we finished drawing logo designs, choosing the best colors, and also the wireframes, we started designing UI and turns out, they went pretty cool and eye-catching."
            letterSpacing={1.2}
          />
        }
      />
      <SectionFlexContainer
        alignItems="center"
        left={
          <Image
            src={Authentication}
            alt="Authentication"
            className="w-[565px] h-[466px] rounded-lg shrink-0"
          />
        }
        right={
          <>
            <Heading2 text="Login Form" uppercase={true} marginBottom={44} />
            <Paragraph
              text="This is the sign up form and customers can log in with their various accounts."
              letterSpacing={1.2}
            />
          </>
        }
      />
      <SectionFlexContainer
        alignItems="center"
        right={
          <Image
            src={LandingPage}
            alt="Landing Page"
            className="w-[565px] h-[1250px] rounded-lg shrink-0"
          />
        }
        left={
          <>
            <Heading2 text="Home Page" uppercase={true} marginBottom={44} />
            <Paragraph
              text="This is the home page and customers view the recent love notes posted in the page and also they can click all and there will be various categories coming with the drop down button."
              letterSpacing={1.2}
            />
          </>
        }
      />
      <SectionFlexContainer
        alignItems="center"
        left={
          <Image
            src={Notes}
            alt="Notes"
            className="w-[565px] h-[730px] rounded-lg shrink-0"
          />
        }
        right={
          <>
            {" "}
            <Heading2 text="Notes Page" uppercase={true} marginBottom={44} />
            <Paragraph
              text="In this notes page, customers can see the notes posted in the website with categories and they can post the notes they want by clicking the post button."
              letterSpacing={1.2}
            />
          </>
        }
      />
      <SectionFlexContainer
        alignItems="center"
        right={
          <Image
            src={Token}
            alt="Token Number"
            className="w-[565px] h-[466px] rounded-lg shrink-0"
          />
        }
        left={
          <>
            {" "}
            <Heading2
              text="Tokens Number Page"
              uppercase={true}
              marginBottom={44}
            />
            <Paragraph
              text="After clicking on the post button, customers will lead to this token number page and they have to fill 4 digit numbers given from the coffee shop."
              letterSpacing={1.2}
            />
          </>
        }
      />
      <SectionFlexContainer
        alignItems="center"
        left={
          <Image
            src={Review}
            alt="Reviews"
            className="w-[565px] h-[790px] rounded-lg shrink-0"
          />
        }
        right={
          <>
            {" "}
            <Heading2 text="Reviews Page" uppercase={true} marginBottom={44} />
            <Paragraph
              text="Customers can also view the reviews page and give reviews about both of the website and notes pages. "
              letterSpacing={1.2}
            />
          </>
        }
      />
    </section>
  );
};

export default UIDesigns;
