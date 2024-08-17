import { Button } from "@/components/ui/button";
import Link from "next/link"
import Image from "next/image"
import StacSV from "./images/Screenshot 2024-08-17 at 12.50.51 PM.png"

export default function Experience(){
    return(
        <div className="flex flex-col p-4 gap-2 w-full justify-between pt-10">
            <h1 style={{fontSize: '28px'}}> <b>Experience</b> </h1>
            <div className="border border-white">
        </div>
        <div className="relative flex flex-col w-full gap-4 pt-12 justify-left">
            <h1 style={{fontSize: "20px"}}>
                <b>Web Developer @ <span style={{ color: '#4287f5' }}> <Link href={"https://stacsv.org/"}>Science and Technology Advisory Council Silicon Valley (STAC SV) &#160;</Link></span></b>
            </h1>
            <h1 style={{fontSize: "14px", color: '#9cb5ba', textAlign: 'left'}}>
                <b>May - August 2024</b>
            </h1>
            <p style={{color: '#9cb5ba', textAlign: 'left'}}>
            ○ Designed and implemented routing architecture for optimal website navigation and performance. <br/>
            ○ Used Next.js, CSS, and Typescript to make web pages that allowed for a satisfying user experience. <br/>
            ○ Built and designed backend for realtime additions to their catalog using APIs with authentication. <br/>
            ○ Designed and implemented efficient routing architecture for optimal website navigation and performance. <br/>
            </p>
        </div>


      </div>
    );
}
