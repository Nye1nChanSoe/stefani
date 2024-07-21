import AboutMe from "./AboutMe";
import Divider from "./components/Divider";
import Heading1 from "./components/Heading1";
import Footer from "./Footer";
import Hero from "./Hero";
import { ProjectList } from "./ProjectList";

export default function Home() {
  return (
    <main className="container px-[60px] mx-auto">
      <Hero />
      <Divider />
      <div className="flex justify-between">
        <Heading1 text="UX & UI Designer" />
        <Heading1 text="Based in Bangkok" />
      </div>
      <ProjectList />
      <AboutMe />
    </main>
  );
}
