import Image from "next/image";
import musicNote from "./images/musical-note.png"
import folder from "./images/folder.png"
import tree from "./images/tree.png"
import bookIco from "./images/icons8-book-64.png"
import me from "./images/me-fr.png"

import { Button } from "@/components/ui/button";
import Link from "next/link"


export default function AboutMe(){
    return(
        <div className="flex flex-col p-4 gap-2 w-full justify-between pt-72">
        <div className="flex flex-col w-full gap-4 pt-12 justify-left">

          {/* Who you are */}

          <h1 style={{fontSize: '28px', textAlign: 'left'}}> <b> Hello!</b> </h1>
          <div className="border border-white">
          </div>
          <div className="flex items-center gap-3">
          <h1  style={{fontSize: '20px', textAlign: 'left'}}> <b> Me</b> </h1>
            <Image
              src={me}
              alt="musical note image"
              style={{ width: '1.75em', height: '1.75em', verticalAlign: 'middle' }}
            />
          </div>
          
          <p style={{color: '#9cb5ba', textAlign: 'left'}}>
            My name is Thomas Laskowski. 
            I am a programmer who likes to build projects and solve challenging problems.
            My intrests lie in the Internet, Algorithms, Math, Biology, Music, and Finance.
          </p>

          {/* This is where you should put how you got started in CS*/}

          <div className="flex items-center gap-3">
          <h1  style={{fontSize: '20px', textAlign: 'left'}}> <b> My Beginnings in CS</b> </h1>
            <Image
              src={tree}
              alt="musical note image"
              style={{ width: '1.75em', height: '1.75em', verticalAlign: 'middle' }}
            />
          </div>
          
          <p style={{color: '#9cb5ba', textAlign: 'left'}}>
            I started programming due to the popular platform known as <span style={{ color: '#4287f5' }}> <Link href="https://en.wikipedia.org/wiki/Roblox">ROBLOX. </Link></span>
            I made my own tycoon game back in 2017 and thought it was a very fun and the expereience even garnered over one thousand vists.
             I thought the experience of making my own game and getting feedback from users was very insightful and fun.
             From there I started my own projects and have sinced improved at programming.
             <br></br>
             P.S. I am not a competitive programmer.
          </p>

          {/* Favorite Project */}

          <div className="flex items-center gap-3">
            <h1 style= {{fontSize: '20px', textAlign: 'left'}}className="font-bold">
              Favorite Project
            </h1>
            <Image
              src={folder}
              alt="musical note image"
              style={{ width: '1.75em', height: '1.75em', verticalAlign: 'middle' }}
            />
          </div>
          <p style={{ display: 'inline', color: '#9cb5ba' , textAlign: 'left'}}>
            My favorite project would definitely be
            <Link href={"https://github.com/hexaflip/hable"}>
            <span style={{ color: '#4287f5' }}> Hable.</span>
            </Link>
            
          </p>

          {/* Favorite Song */}

          <div className="flex items-center gap-3">
            <h1 style= {{fontSize: '20px'}}className="font-bold">
              Favorite Song
            </h1>
            <Image
              src={musicNote}
              alt="musical note image"
              style={{ width: '1.75em', height: '1.75em', verticalAlign: 'middle' }}
            />
          </div>
          
          <p style={{color: '#4287f5', textAlign: 'left'}}>
            <Link href={"https://www.youtube.com/watch?v=ZKjIHQxG_3Q"}>
            Tyler the Creator - Sweet /  I Thought you Wanted to Dance
            </Link>
          </p>

          {/* Books */}

        <div className="flex flex-col items-start">
          <h1 style= {{fontSize: '20px'}}className="font-bold pb-4">
              Reading List
            </h1>
          <p className = "pb-4"style={{color: '#9cb5ba', textAlign: 'left'}}>
            These are books that I have read and my thoughts on them.
          </p>
        <Link href="/books"><Button variant="secondary">Books</Button></Link>
        </div>
        </div>
      </div>
    );
}
