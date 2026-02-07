import SplitLayout from "@/components/Layout/SplitLayout";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import TechStack from "@/components/Sections/TechStack";
import Projects from "@/components/Sections/Projects";
import OpenSource from "@/components/Sections/OpenSource";
import Timeline from "@/components/Sections/Timeline";
import Achievements from "@/components/Sections/Achievements";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <SplitLayout>
      <div className="space-y-0 relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <OpenSource />
        <Timeline />
        {/* <Achievements /> */}
        <Contact />
      </div>
    </SplitLayout>
  );
}
