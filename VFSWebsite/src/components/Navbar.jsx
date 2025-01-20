import React from "react";
import Logo from "../assets/images/vfsatucilogo.webp"
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center md:mx-10">
            <img className="w-[140px]" src={Logo} alt="Vertical Flight Society Logo" />
            <div className="flex gap-12 text-grey">
                <Link to="/" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Home</Link>
                <Link to="/about" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>About</Link>
                <Link to="/news" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>News</Link>
                <Link to="/events" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Events</Link>
                <Link to="/contact" className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-grey/10 hover:px-4 hover:py-2 hover:rounded-sm"}>Contact</Link>
            </div>
            <div className="flex gap-8 text-lg text-grey">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
        </div>
    )
}