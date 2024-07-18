"use client";

import AboutMe from "./AboutMe";
import Divider from "./components/Divider";
import Heading1 from "./components/Heading1";
import Footer from "./Footer";
import HeroAnimatedText from "./HeroAnimatedText";
import { ProjectList } from "./ProjectList";

export default function Home() {
  return (
    <main>
      <div className="container px-[60px] mx-auto">
        <HeroAnimatedText text="S" />
        <HeroAnimatedText text="T" />
        <HeroAnimatedText text="E" />
        <HeroAnimatedText text="F" />
        <HeroAnimatedText text="A" />
        <HeroAnimatedText text="N" />
        <HeroAnimatedText text="I" />

        <Divider />

        <div className="flex justify-between">
          <Heading1 text="UX and UI Designer" />
          <Heading1 text="Based in Bangkok" />
        </div>

        <ProjectList />
        <AboutMe />
      </div>
      <Footer />
    </main>
  );
}
