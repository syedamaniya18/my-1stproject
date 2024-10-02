import Link from "next/link";


export default function Header(){
    return(
        <div className="header">
            
            <ul className="header-buttons">
                <Link href={"/Portfolio"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/About"}>
                <li>About</li>
                </Link>
                <Link href={"/Contact"}>
                <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}