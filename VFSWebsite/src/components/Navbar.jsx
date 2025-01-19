import React from "react";
import Logo from "../assets/images/vfsatucilogo.webp"
import {Link} from "react-router";

export default function Navbar() {
    return (
        <div>
            <img className="logo" src={Logo} alt="VFS-Logo" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">News</Link>
                <Link to="/contact">Events</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}