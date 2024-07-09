"use client";
import Image from "next/image"
import React from "./images/React-icon.png"
import Python from "./images/Python-logo.png"
import Swift from "./images/swift-logo.png"
import Roblox from "./images/roblox-logo.png"

import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link";

export default function Home() {
  const { toast } = useToast()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="flex justify-center w-full mt-56">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1.2,
              opacity: 1,
              transition: {
                delay: 0.5
              }
            },
          }}>
            <h1 className="font-size" style={{ fontSize: '30px' }}>
              Hey! I'm Thomas.
            </h1>
          </motion.div>
        </div>
        <div className="flex justify-center w-full" style={{ marginTop: '35px' }}>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1.2,
              opacity: 1,
              transition: {
                delay: 1.5
              }
            },
          }}>
            <div className="flex">
              <Typewriter
                options={{
                  strings: ['This is my portfolio', ' These are my contributions', 'These are some of my favorite projects'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex justify-center w-full">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1.2,
              opacity: 1,
              transition: {
                delay: 5
              }
            },
          }}>
                      <h1 className="font-size" style={{ fontSize: '10px' }}>
              hint: scroll down
            </h1>
            </motion.div>
        </div>
        <div className="flex-col justify-center w-full p-10 mt-96">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
              <Image
            src={Roblox}
            alt="react-logo"
            width={30}
            height={30}
            />
            <Button variant="outline">
              <Link href="https://www.roblox.com/games/1149976800/Black-Ops-Tycoon-Gun-Fixes#!/store">Check it out!</Link>
            </Button>
              </div>

            <br></br>
              <CardTitle>Black Ops Tycoon</CardTitle>
              <CardDescription>
                Nov 2017 - March 2018
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is where I started programming. 
                My first ever project that I started when I was 12. 
                This was a tycoon game where you build your base to make money and then use the money to fight against others.
                I managed to get 1000+ visits and it made me fall in love with programming.
                
              </p>
            </CardContent>
            <CardFooter>
              <p>
              Roblox Studio, Lua, and a Dream
              </p>
            </CardFooter>
          </Card>
        <Card>
            <CardHeader>
            <div className="flex justify-between items-center">
              <Image
            src={React}
            alt="react-logo"
            width={30}
            height={30}
            />
            <Button variant="outline" onClick={() => {
              toast({
                title: "Link Unavailable",
                description: "Unfortunatley, this project is no longer viewable as I currently don't have access to it.",
              })
            }}>
              
              <p>Check it out!</p>
            </Button>
              </div>
            <br></br>
              <CardTitle>youlearn-classmate</CardTitle>
              <CardDescription>
                Oct 2023 - Apr 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
              This was a team project that was given to us by one our professors at MSU. I designed and built a working frontend that allowed users to prompt a trained chatgpt model for the cse 320 course, and also allowed the professor to see the previous chats that students made by connecting api endpoints with MongoDB. <br></br> 
              Thank you to the Imagine Software Club @ MSU
              </p>
            </CardContent>
            <CardFooter>
              <p>
              MongoDB, Open AI API, Chatgpt 3.5, Google Firebase, Next.JS, ShadCN, and Typescript
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <div className="flex justify-between items-center">
              <Image
            src={React}
            alt="react-logo"
            width={30}
            objectFit="contain"
            height={30}  
            />
            <Button variant="outline">
              <Link href="https://stacsv.org">Check it out!</Link>
            </Button>
              </div>
            <br></br>
              <CardTitle>stacsv.org</CardTitle>
              <CardDescription>
                Summer 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
              This is a website I built for a non-profit 501c3 that let me have the opportunity to learn.
                I built multiple pages including the landing page, and a working form to let people contact STAC. I also built a way
                for easy mantience by linking a backend system to help update the website
              </p>
            </CardContent>
            <CardFooter>
              <p>
              Next.JS, Typescript, and CSS
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <Image
            src={Python}
            alt="react-logo"
            width={30}
            height={30}  
            />
            <br></br>
              <CardTitle>math off</CardTitle>
              <CardDescription>
                June 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
            This was a program that I build that would allow the user to train their mental math skills.
             This was so me and my friend could race each other and see who could solve the most problems in a minute. 
            (i won)
            </CardContent>
            <CardFooter>
              Python and Flask
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <Image
            src={Swift}
            alt="react-logo"
            width={30}
            height={30}  
            />
            <br></br>
              <CardTitle>Hable (unfinished)</CardTitle>
              <CardDescription> 
                July 2023 - Current
              </CardDescription>
            </CardHeader>
            <CardContent>
                People shouldn't have to pay to have something like a habit tracker, so I made one for free. 
                The name is short for habit table. 
                 Made for my friend Alejandro.
            </CardContent>
            <CardFooter>
              Swift, SwiftUI, and SF Symbols
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <Image
            src={React}
            alt="react-logo"
            width={30}
            height={30}  
            />
            <br></br>
              <a href="https://stacsv.org"><CardTitle>L.O.R (unfinished)</CardTitle></a>
              <CardDescription> 
                June 2024 - Current
              </CardDescription>
            </CardHeader>
            <CardContent>
            Acronym for Library of Resources. This website aims to make it easier for those to share their resources and specific issues they have run into in order to help others and themselves get started with and on their projects. 
            </CardContent>
            <CardFooter>MongoDB, Next.JS </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
