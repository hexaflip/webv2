import AboutMe from "./about-me";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Link from "next/link"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import githublogo from "./images/github-logo-white.png"
import linkedinLogo from "./images/linkedin-logo.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="flex justify-center w-full mt-56">
            <h1 className="font-size" style={{ fontSize: "48px", textShadow: "1px 1px 10px white"}}>
              Thomas Laskowski
            </h1>
        </div>
        <div className="flex pt-12">
          <Link href="#about-me"><Button variant={"secondary"}> About</Button></Link>
          <Link href="#experience"><Button variant={"secondary"}> Experience </Button></Link>
          <Link href="#projects"><Button variant={"secondary"}> Projects </Button></Link>
          <Link href="#contact"><Button variant={"secondary"}> Contact </Button></Link>
        </div>
        <div className="flex gap-4 pt-4">
          <Link href="https://github.com/hexaflip"> <Image src={githublogo} width={30} height={30} alt="github link"/> </Link>
          <Link href="https://www.linkedin.com/in/thomas-laskowski-sm/"> <Image src={linkedinLogo} width={30} height={30} alt="linkedin link"/> </Link>
        </div>
        <section id="about-me">
          <AboutMe/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </main>
  );
}
