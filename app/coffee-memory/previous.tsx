import React from "react";
import Heading1 from "../components/Heading1";
import Link from "next/link";
import Image from "next/image";
import Paragraph from "../components/Paragraph";

import CoffeeMemoryBanner from "../../public/images/CoffeeMemoryBanner.jpeg";
import ProjectTimeline from "../../public/images/project_timeline.jpeg";
import UserFlow from "../../public/images/userflow.png";
import Wireframes from "../../public/images/wireframes.jpeg";
import ColorPalette from "../../public/images/color_palette.jpeg";
import LogoDesign from "../../public/images/logo_design.jpeg";
import Authentication from "../../public/images/auth.jpeg";
import LandingPage from "../../public/images/coffee_memory_landing.jpeg";
import Notes from "../../public/images/coffee_memory_notes.jpeg";
import Token from "../../public/images/coffee_memory_token.jpeg";
import Review from "../../public/images/coffee_memory_reviews.jpeg";
import Teamwork from "../../public/images/teamwork.png";

const CoffeeMemoryPage = () => {
  return (
    <section className="container px-[60px] pt-[18px] mx-auto">
      <div className="flex justify-start items-center gap-[45px]">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="42"
            viewBox="0 0 25 42"
            fill="none"
          >
            <path
              d="M21.2314 42L0 21L21.2314 0L25 3.7275L7.53715 21L25 38.2725L21.2314 42Z"
              fill="white"
            />
          </svg>
        </Link>
        <Heading1
          text="Coffee Memory"
          uppercase={true}
          letterSpacing={4.4}
          marginBottom={7}
        />
      </div>
      <div className="pt-[52px] space-y-[90px]">
        <Image
          src={CoffeeMemoryBanner}
          alt="Coffee Memory Banner"
          className="rounded-lg"
        />
        <div className="flex justify-between items-start gap-8">
          <Image
            src={ProjectTimeline}
            alt="Project Timeline"
            className="w-[565px] h-[426px] rounded-lg shrink-0"
          />
          <div className="flex-1">
            <Heading1
              text="Project Timeline"
              uppercase={true}
              letterSpacing={4.4}
              marginBottom={30}
            />
            <ul className="list-disc list-inside text-[20px] tracking-widest font-nunito font-semibold space-y-6">
              <li>Gathering Requirements (3 days)</li>
              <li>User Flow (5 days)</li>
              <li>Wireframe (5 days)</li>
              <li>Art Direction (5 days)</li>
              <li>UI Designs (12 days)</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1">
            <Heading1
              text="User Flow"
              uppercase={true}
              letterSpacing={4.4}
              marginBottom={30}
            />
            <Paragraph
              text="After gathering requirements, we decided to draw user flow to make sure every function is needed in the website."
              marginTop={24}
              letterSpacing={3.36}
            />
          </div>
          <Image
            src={UserFlow}
            alt="User Flow"
            className="w-[565px] h-[426px] rounded-lg shrink-0"
          />
        </div>
        <div className="flex justify-between items-start gap-8">
          <Image
            src={Wireframes}
            alt="Wireframes"
            className="w-[565px] h-[426px] rounded-lg shrink-0"
          />
          <div className="flex-1">
            <Heading1
              text="Wireframes"
              uppercase={true}
              letterSpacing={4.4}
              marginBottom={30}
            />
            <Paragraph
              text="After finishing up the user flow, these are the wireframes screen designs that we’ve worked on. In these wireframes, we include sign up form, home screen, token number screen, notes screen, review screen, and also review screen."
              marginTop={24}
              marginBottom={24}
              letterSpacing={3.36}
            />
          </div>
        </div>
        <div>
          <Heading1
            text="Art Direction"
            uppercase={true}
            letterSpacing={4.4}
            marginBottom={50}
          />
          <div className="flex justify-between items-start gap-8">
            <Image
              src={LogoDesign}
              alt="Logo Design"
              className="w-[565px] h-[426px] rounded-lg shrink-0"
            />
            <Image
              src={ColorPalette}
              alt="Color Palette"
              className="w-[565px] h-[426px] rounded-lg shrink-0"
            />
          </div>
        </div>
        <div>
          <Heading1
            text="UI DESIGNS & HOW IT WORKS"
            uppercase={true}
            letterSpacing={4.4}
            marginBottom={30}
          />
          <Paragraph
            text="When we finished drawing logo designs, choosing the best colors, and also the wireframes, we started designing UI and turns out, they went pretty cool and eye-catching. "
            marginTop={24}
            marginBottom={52}
            letterSpacing={3.36}
          />
        </div>
      </div>
      <div className="space-y-[70px]">
        <div className="flex justify-between items-center gap-8">
          <Image
            src={Authentication}
            alt="Authentication"
            className="w-[565px] h-[466px] rounded-lg shrink-0"
          />
          <div className="flex-1">
            <Paragraph
              text="This is the sign up form and customers can log in with their various accounts."
              letterSpacing={3.36}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="flex-1">
            <Paragraph
              text="This is the home page and customers view the recent love notes posted in the page and also they can click all and there will be various categories coming with the drop down button."
              letterSpacing={3.36}
            />
          </div>
          <Image
            src={LandingPage}
            alt="Landing Page"
            className="w-[565px] h-[1250px] rounded-lg shrink-0"
          />
        </div>
        <div className="flex justify-between items-center gap-8">
          <Image
            src={Notes}
            alt="Notes"
            className="w-[565px] h-[730px] rounded-lg shrink-0"
          />
          <div className="flex-1">
            <Paragraph
              text="In this notes page, customers can see the notes posted in the website with categories and they can post the notes they want by clicking the post button."
              letterSpacing={3.36}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="flex-1">
            <Paragraph
              text="After clicking on the post button, customers will lead to this token number page and they have to fill 4 digit numbers given from the coffee shop."
              letterSpacing={3.36}
            />
          </div>
          <Image
            src={Token}
            alt="Token Number"
            className="w-[565px] h-[466px] rounded-lg shrink-0"
          />
        </div>
        <div className="flex justify-between items-center gap-8">
          <Image
            src={Review}
            alt="Reviews"
            className="w-[565px] h-[790px] rounded-lg shrink-0"
          />
          <div className="flex-1">
            <Paragraph
              text="Customers can also view the reviews page and give reviews about both of the website and notes pages. "
              letterSpacing={3.36}
            />
          </div>
        </div>
      </div>
      <div className="py-[90px]">
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1">
            <Heading1
              text="Teamwork"
              uppercase={true}
              letterSpacing={4.4}
              marginBottom={30}
            />
            <Paragraph
              text="We work together as a team and also listen to the other team members who are front-end developers. We even check on each other's work and make sure the design is good enough. After that, we move on to the next task of the design process."
              marginTop={24}
              letterSpacing={3.36}
            />
          </div>
          <Image
            src={Teamwork}
            alt="Teamwork (us)"
            className="w-[565px] h-[446px] rounded-lg object-cover object-top shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default CoffeeMemoryPage;
