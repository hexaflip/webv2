import { Button } from "@/components/ui/button";
import Link from "next/link"


export default function Contact(){
    return(
        <div className="relative flex flex-col w-full gap-4 pt-12 justify-left">
            <h1 style={{fontSize: '28px', textAlign: 'left'}}> <b>Contact</b> </h1>
            <div className="border border-white">
            </div>
        <div className="flex flex-col w-full gap-4 pt-4 justify-left">
            <p style={{textAlign: 'left'}}>
                Feel free to ask me questions or recommend me books! (email for resume)
                &#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;
                &nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;&#160;&nbsp;
                &#160;&nbsp;<br/>
                email: tlaskowski7375@gmail.com
            </p>
        </div>
      </div>
    );
}