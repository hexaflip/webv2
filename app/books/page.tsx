import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bookIco from "../images/icons8-book-64.png";
import backButton from "../images/back-button.png";
import summerIcon from "../images/summer-icon.png"
import autumnIcon from "../images/autumn-icon.png"

export default function Page() {
  return (
    <div className="flex flex-col p-4 w-full justify-between font-mono">
      <div className="flex items-center gap-3 pb-4">
      <Link href={"/"}>
          <Image src={backButton} width={30} height={30} alt="back button" />
        </Link>
        <p style={{ color: "#ffffff", marginLeft: "8px", textAlign: "left" }}>
          Home // Books
        </p>
      </div>
      <div className="flex items-center gap-3 pb-8">
      <h1 style={{fontSize: "32px"}}>
        <b>Books</b>
        
      </h1>
      <Image
          src={bookIco}
          alt="book icon"
          width={32} // Width specified as 32 for 2em equivalent
          height={32} // Height specified as 32 for 2em equivalent
          style={{ verticalAlign: "middle" }}
        />
      </div>
      <div className="Divine-Dungeon-Series pb-12 w-10/12">
      <div className="flex items-center gap-3 pb-4">
        <h1 style={{ fontSize: "20px" }} className="book-title font-bold">
        <Link href={"https://www.goodreads.com/series/192510-the-divine-dungeon"}>
          Divine Dungeon Series (Summer 2024)
          </Link>
        </h1>
        <Image
          src={summerIcon}
          alt="book icon"
          width={32} // Width specified as 32 for 2em equivalent
          height={32} // Height specified as 32 for 2em equivalent
          style={{ verticalAlign: "middle" }}
        />
        </div>


      <p style={{ color: "#9cb5ba", textAlign: "left" }}>
        I was recommended to read the Divine Dungeon Series over the Summer and
        am currently on the fourth book. The series is about a man who is reborn
        into a dungeon and finds new ways to grow and develop and become
        knowledgeable. This book helped me remember how much fun it is to learn.
        While it can be childish, it is a fun read. <br /> <br />
        The following are the books in the series:
      </p>
      <p style={{ color: "#9cb5ba", marginLeft: "25px", textAlign: "left" }}>
        ○ Dungeon Born ✔ <br />
        ○ Dungeon Madness ✔ <br />
        ○ Dungeon Calamity ✔ <br />
        ○ Dungeon Desolation ✔ <br />
        ○ Dungeon Eternium (1 / 52)
      </p>
      </div>
      <div className="Artorian-Archives-Series w-10/12 pb-12">
        <div className="flex items-center gap-3 pb-4">
          <h1 style={{ fontSize: "20px" }} className="book-title font-bold">
          <Link href={"https://www.goodreads.com/series/192510-the-divine-dungeon"}>
            Artorian&apos;s Archives (Autumn 2024)
            </Link>
          </h1>
          <Image
            src={autumnIcon}
            alt="book icon"
            width={32} // Width specified as 32 for 2em equivalent
            height={32} // Height specified as 32 for 2em equivalent
            style={{ verticalAlign: "middle" }}
          />
          </div>


      <p style={{ color: "#9cb5ba", textAlign: "left" }}>
        I ended up losing a bet and now I have to read the first six books in the series. 
        I honestly don&apos;t know what to expect.
        This series is supposed to be serious at the beginning and then become very troll so I have no idea.
         <br /> <br />
        The following are the first six books in the series:
      </p>
      <p style={{ color: "#9cb5ba", marginLeft: "25px", textAlign: "left" }}>
        ○ Axiom  <br />
        ○ Alumni  <br />
        ○ Annex  <br />
        ○ Arsenal  <br />
        ○ Acme  <br />
        ○ Anima  <br />
      </p>
      </div>
      
        
    </div>
  );
}
