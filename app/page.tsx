import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Contact from "@/components/main/Contact.jsx";
import About from "@/components/main/About";
export default function Home() {
  return (
    <main className="h-full w-full contents">
      <div className="flex flex-col gap-20">
        <Hero />
        <About/>
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </main>
  );
}
