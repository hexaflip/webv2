"use client";
import Image from "next/image";
import ReactIcon from "./images/React-icon.png";
import PythonLogo from "./images/Python-logo.png";
import SwiftLogo from "./images/swift-logo.png";
import RobloxLogo from "./images/roblox-logo.png";
import githubWhite from "./images/github-logo-blue.png";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="flex justify-center w-full mt-56">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1.2,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            <h1 className="font-size" style={{ fontSize: "30px", textShadow: "1px 1px 10px white"}}>
              I&apos;m Thomas.
            </h1>
          </motion.div>
        </div>
        <div className="flex justify-center w-full" style={{ marginTop: "35px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1.2,
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
            <div className="flex">
              <Typewriter
                options={{
                  strings: [
                    "This is my portfolio",
                    "These are my contributions",
                    "These are some of my favorite projects",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex justify-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1.2,
                opacity: 1,
                transition: {
                  delay: 5,
                },
              },
            }}
          >
            <h1 className="font-size" style={{ fontSize: "10px"}}>
              hint: scroll down
            </h1>
          </motion.div>
        </div>
        <div>
          
        </div>
        <div className="flex-col justify-center w-full p-10 mt-96">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Image
                  src={RobloxLogo}
                  alt="react-logo"
                  width={30}
                  height={30}
                />
                <Button variant="outline">
                  <Link href="https://www.roblox.com/games/1149976800/Black-Ops-Tycoon-Gun-Fixes#!/store">
                    Check it out!
                  </Link>
                </Button>
              </div>

              <br></br>
              <CardTitle>Black Ops Tycoon</CardTitle>
              <CardDescription>Nov 2017 - March 2018</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is where I started programming. My first ever project that
                I started when I was 12. This was a tycoon game where you build
                your base to make money and then use the money to fight against
                others. I managed to get 1000+ visits and it made me fall in
                love with programming.
              </p>
            </CardContent>
            <CardFooter>
              <p>Roblox Studio, Lua, and a Dream</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Image
                  src={ReactIcon}
                  alt="react-logo"
                  width={30}
                  height={30}
                />
              </div>
              <br></br>
              <CardTitle>youlearn-classmate</CardTitle>
              <CardDescription>Oct 2023 - Apr 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This was a team project that was given to us by one of our
                professors at MSU. I designed and built a working frontend that
                allowed users to prompt a trained chatgpt model for the CSE 320
                course, and also allowed the professor to see the previous
                chats that students made by connecting API endpoints with
                MongoDB. <br></br> Thank you to the Imagine Software Club @ MSU
              </p>
            </CardContent>
            <CardFooter>
              <p>MongoDB, Open AI API, ChatGPT 3.5, Google Firebase, Next.JS, ShadCN, and TypeScript</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <div className="flex justify-between items-center">
                <Image
                  src={PythonLogo}
                  alt="react-logo"
                  width={30}
                  height={30}
                />
                <Button variant="outline">
                  <Link href="https://mathoff.streamlit.app/">
                    Check it out!
                  </Link>
                </Button>
              </div>
              <CardTitle>Math Off</CardTitle>
              <CardDescription>June 2024 - Current</CardDescription>
            </CardHeader>
            <CardContent>
              This is a program that I am building to focus on object orientated programming. I wanted to use good techniques to further my knowledge of Python.
              I am making this to help anyone to become better at mental math. I want to implement graphs and a leveling system to add increasing difficulty in the future.
            </CardContent>
            <CardFooter>Python, Numpy, Matplotlib ,and Streamlit</CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <div className="flex justify-between items-center">
                <Image
                  src={ReactIcon}
                  alt="react-logo"
                  width={30}
                  height={30}
                />
                <Button variant="outline">
                  <Link href="https://www.stacsv.org">
                    Check it out!
                  </Link>
                </Button>
              </div>
              <br></br>
              
              <CardTitle>stacsv.org</CardTitle>
              <CardDescription>Summer 2024 (Jun - Aug) <br></br>(internship)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is a website I built for a non-profit 501c3 that generousley gave me
                the opportunity to learn. I learned a lot about front-end design and also more about typescript and css.
              </p>
            </CardContent>
            <CardFooter>
              <p>Next.JS, TypeScript, and CSS</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Image
                  src={ReactIcon}
                  alt="react-logo"
                  width={30}
                  objectFit="contain"
                  height={30}
                />  
              </div>
              <br></br>
              <CardTitle>tomski.work</CardTitle>
              <CardDescription>July 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is the current website you are using and was really fun to make. 
                While it is very simple that is what I like about it.
              </p>
            </CardContent>
            <CardFooter>
              <p>Next.JS, ShadCN, TypeScript, and CSS</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <div className="flex justify-between items-center">
                <Image
                  src={SwiftLogo}
                  alt="swift-logo"
                  width={30}
                  height={30}
                />
                
                <Button variant="outline">
                  <Link href="https://github.com/hexaflip/hable">
                    Github Repo!
                  </Link>
                </Button>
                
              </div>
              <CardTitle>Hable (in progress)</CardTitle>
              <CardDescription>July 2023 - Current</CardDescription>
            </CardHeader>
            <CardContent>
              People shouldn&apos;t have to pay to have something like a habit tracker, so I made one for free. The name is short for habit table. Made for my friend Alejandro.
            </CardContent>
            <CardFooter>Swift, SwiftUI, and SF Symbols</CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src={ReactIcon}
                alt="react-logo"
                width={30}
                height={30}
              />
              <br></br>
              <CardTitle>L.O.R</CardTitle>
              <CardDescription>June 2024 - July 2024 -&gt; On Break</CardDescription>
            </CardHeader>
            <CardContent>
              Acronym for Library of Resources. This website aims to make it easier for those to share their resources and specific issues they have run into in order to help others and themselves get started with and on their projects.
            </CardContent>
            <CardFooter>MongoDB, Next.JS</CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
