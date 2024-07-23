import AboutMe from "./AboutMe";
import Hero from "./Hero";
import { ProjectList } from "./ProjectList";

export default function Home() {
  return (
    <main className="container px-[50px] mx-auto">
      <Hero marginBottom={124} />
      <ProjectList marginBottom={104} />
      <AboutMe marginBottom={104} />
    </main>
  );
}
