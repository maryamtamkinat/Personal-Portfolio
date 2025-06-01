"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import dynamic from 'next/dynamic'

const projects = dynamic(() => import('../components/Projects'), { ssr: false })
const skills = dynamic(() => import('../components/Skills'), { ssr: false })
const about = dynamic(() => import('../components/About'), { ssr: false })
const contact = dynamic(() => import('../components/Contact'), { ssr: false })

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
