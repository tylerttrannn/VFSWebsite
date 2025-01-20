import React from "react";
import Logo from "../assets/images/vfsatucilogo.webp"
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center lg:mx-10">
            <img className="w-[140px]" src={Logo} alt="Vertical Flight Society Logo" />
            <div className="flex gap-12 text-grey">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">News</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="flex gap-8 text-lg text-grey">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
        </div>
    )
}