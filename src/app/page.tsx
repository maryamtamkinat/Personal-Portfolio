"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <div className="mx-auto py-7">
      <Hero/>
      <Skills/>
      <Services/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
  );
}
