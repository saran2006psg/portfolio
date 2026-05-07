import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Navbar />
      <ScrollyCanvas numFrames={120} />
      <About />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
