import { Button } from "@/components/ui/button";
import Link from "next/link"
import redirect from "./images/redirect.png"
import Image from "next/image"


export default function Projects(){
    return(
        <div className="flex flex-col p-4 gap-2 w-full justify-between pt-10">
            <h1 style={{fontSize: '28px'}}> <b>Projects</b> </h1>
            <div className="border border-white">
            </div>
        <div className="flex flex-col w-full gap-4 pt-12 justify-left">
            <div className="Youlearn-Classmate">
                <div className="flex flex-col pb-4">
                    <h1 style={{fontSize: "20px"}}>
                        <b> Youlearn-Classmate</b>
                    </h1>
                </div>
            <p style={{color: '#9cb5ba'}}>
            This was a team project that was given to us by one of our professors at MSU. 
            I designed and built a working frontend that allowed users to prompt a trained chatgpt model for the CSE 320 course. 
            The chatbot came with a working Table that displayed chat messages for the professor that I designed and connected to the API. 
            </p>
            <p className="pt-4 pb-4" style={{fontSize: "12px"}}>
                React &#160;&nbsp;Next.JS&#160;&nbsp; Node&#160;&nbsp; Open API
            </p>
            </div>
            <div className="Math-Off">
                <div className="flex pb-4 gap-4">
                    <h1 style={{fontSize: "20px"}}>
                        <b> Math Off</b>
                    </h1>
                    <Link href={"https://github.com/hexaflip/smath/"}>
                    <Image
                        src={redirect}
                        width={25}
                        height={25}
                        alt="redirect-math-off"
                        />
                    </Link>
                    
                </div>
            <p style={{color: '#9cb5ba'}}>
            This is a program that I am building to focus on object orientated programming. 
            I wanted to use good techniques to further my knowledge of Python. 
            I am making this to help anyone to become better at mental math. 
            Includes leveling system for anyone wanting to improve.
            </p>
            <p className="pt-4 pb-4" style={{fontSize: "12px"}}>
                Python
            </p>
            </div>
            <div className="Tycoon">
            <div className="flex pb-4 gap-4">
                    <h1 style={{fontSize: "20px"}}>
                        <b> Black Ops Tycoon</b>
                    </h1>
                    <Link href={"https://www.roblox.com/games/1149976800/Black-Ops-Tycoon-Gun-Fixes/"}>
                    <Image
                        src={redirect}
                        width={25}
                        height={25}
                        alt="redirect-roblox-game"
                        />
                    </Link>
                    
                </div>
            <p style={{color: '#9cb5ba'}}>
            This is where I started programming.
             My first ever project that I started when I was 12.
              This was a tycoon game where you build your base to make money and then use the money to fight against others.
               I managed to get 1000+ visits and it made me fall in love with programming.
            </p>
            <p className="pt-4 pb-4" style={{fontSize: "12px"}}>
                Roblox Studio &#160;&nbsp; Lua
            </p>
            </div>
            
        </div>
      </div>
    );
}
