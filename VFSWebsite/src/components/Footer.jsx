import vfsLogo from "../assets/images/vfs-symbol-small3.webp";
import Youtube from "../assets/images/logos/youtube.svg"
import Linkedin from "../assets/images/logos/linkedin.svg"
import Twitter from "../assets/images/logos/twitter.svg"
import Instagram from "../assets/images/logos/instagram.svg"
import Facebook from "../assets/images/logos/facebook.svg"
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
    return (
        <div className = "pb-10 ">
            {/* Links Container */}
            <div>
                <div className="flex flex-col gap-20 sm:gap-20 md:flex-row md:gap-40 lg:gap-48 xl:gap-96 justify-start p-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold" >Contact</h1>
                        <h1 className="font-light cursor-pointer"  onClick={() => window.location.href = 'https://www.instagram.com/vfs_uci'}>Instagram</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>Discord</h1>
                        <h1 className="font-light cursor-pointer"onClick={() =>window.location.href = 'https://www.linkedin.com/company/verticalflightsocietyatuci/'}>LinkedIn</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://www.youtube.com/VTOLsociety'}>YouTube</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Resources</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://vtol.org'}>VFS Page</h1>
                        <h1 className="font-light cursor-pointer">Student Handbook</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Join</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'} >Contact</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>Events</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>About</h1>
                    </div>
                </div>

                {/* Line Divider*/}
                <div className = "px-5 pt-16"> 
                    <hr className="border border-gray-300" />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-row justify-between items-center pt-10 px-5">
                    <div className="flex flex-row items-center gap-5">
                        <img src={vfsLogo} alt="vfs-logo" className="w-18 h-12" />
                        <h1 className = "font-semibold text-2xl">Vertical Flight Society at UCI</h1>
                    </div>

                    {/* Socials */} 
                    <div className="hidden sm:flex flex-row gap-5">
                        <a href="https://www.instagram.com/vfs_uci" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/verticalflightsocietyatuci/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/VTOLsociety" target="_blank" rel="noopener noreferrer">
                            <img src={Youtube} alt="YouTube" />
                        </a>
                        <a href="https://twitter.com/VTOLsociety" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com/VTOLsociety" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
