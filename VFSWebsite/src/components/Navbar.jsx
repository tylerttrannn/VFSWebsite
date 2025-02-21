import {useState} from "react";
import Logo from "../assets/images/vfsatucilogo.jpeg"
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { buttonVariants } from "@/components/ui/button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            {/* Desktop View */}
            <div className="flex flex-row justify-between items-center md:mx-10 p-4">
                <Link to={"/"}>
                    <img className="w-[180px]" src={Logo} alt="Vertical Flight Society Logo"/>
                </Link>
                <div className="hidden md:flex gap-12 text-grey">
                    <Link to="/" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Home</Link>
                    <Link to="/about" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>About</Link>
                    <Link to="/news" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>News</Link>
                    <Link to="/events/1" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Past Events</Link>
                    <Link to="/projects" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Projects</Link>
                </div>
                <div className="hidden md:flex gap-8 text-lg text-grey">
                    <Link to={"https://www.instagram.com/vfs_uci/"} className={"hover:text-yellow"}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to={"https://www.linkedin.com/company/the-vertical-flight-society-at-uci/"} className={"hover:text-yellow"}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to={"https://discord.com/invite/ea37NfeuGb"} className={"hover:text-yellow"}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </Link>

                </div>

                <button className="md:hidden text-grey text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Navbar*/}
            <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[350px]" : "max-h-0"}`} >
                <div className="flex flex-col items-center gap-4 bg-white p-4">
                    <Link to="/" className={`${buttonVariants({ variant: "ghost" })} w-full`} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className={`${buttonVariants({ variant: "ghost" })} w-full`} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/news" className={`${buttonVariants({ variant: "ghost" })} w-full`} onClick={() => setIsOpen(false)}>News</Link>
                    <Link to="/events/1" className={`${buttonVariants({ variant: "ghost" })} w-full`} onClick={() => setIsOpen(false)}>Events</Link>
                    <Link to="/projects" className={`${buttonVariants({ variant: "ghost" })} w-full`} onClick={() => setIsOpen(false)}>Projects</Link>

                    
                    <div className="flex gap-6 text-lg text-grey">
                        <Link to="https://www.instagram.com/vfs_uci/" className="hover:text-yellow">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://www.linkedin.com/company/the-vertical-flight-society-at-uci/" className="hover:text-yellow">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link to="https://discord.com/invite/ea37NfeuGb" className="hover:text-yellow">
                            <FontAwesomeIcon icon={faDiscord} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}