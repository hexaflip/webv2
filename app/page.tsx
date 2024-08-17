"use client"

import AboutMe from "./about-me";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import githublogo from "./images/github-logo-white.png";
import linkedinLogo from "./images/linkedin-logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center text-center font-mono text-sm lg:text-base">
        <div className="mt-12 lg:mt-56">
          <h1 className="text-3xl lg:text-5xl text-white" style={{ textShadow: "1px 1px 10px white" }}>
            Thomas Laskowski
          </h1>
        </div>
        <nav className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-4 lg:gap-0">
          <Link href="#about-me"><Button variant="secondary">About</Button></Link>
          <Link href="#experience"><Button variant="secondary">Experience</Button></Link>
          <Link href="#projects"><Button variant="secondary">Projects</Button></Link>
          <Link href="#contact"><Button variant="secondary">Contact</Button></Link>
        </nav>
        <div className="mt-4 flex gap-4">
          <Link href="https://github.com/hexaflip">
            <Image src={githublogo} width={30} height={30} alt="GitHub link" />
          </Link>
          <Link href="https://www.linkedin.com/in/thomas-laskowski-sm/">
            <Image src={linkedinLogo} width={30} height={30} alt="LinkedIn link" />
          </Link>
        </div>
        <section id="about-me" className="mt-8 w-full">
          <AboutMe />
        </section>
        <section id="experience" className="mt-8 w-full">
          <Experience />
        </section>
        <section id="projects" className="mt-8 w-full">
          <Projects />
        </section>
        <section id="contact" className="mt-8 w-full">
          <Contact />
        </section>
      </div>
    </main>
  );
}
