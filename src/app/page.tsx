import Image from "next/image";
import Girl from "./public/image.png";

export default function Home() {
  return (
    <div className="black">
      <div className="childcontainer">
        <h1>
          Hello,It's Me
          <br /> <span className="violet">Syeda Maniya</span>.
        </h1>
        <p className="small">
          At GIAIC, I am learning NextJs and have acquired knowledge of HTML,
          CSS, JavaScript and Typescript. My goal is to become a proficient web
          developer.
        </p>
      </div>
      <div className="picture">
        <Image src={Girl} alt="A picture" />
      </div>
    </div>
  );
}
