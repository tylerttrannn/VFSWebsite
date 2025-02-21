import vfsLogo from "../assets/images/vfs-symbol-small3.webp";
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedinIn, faFacebookF, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
    return (
        <div className = "px-5 sm:px-10 md:px-20 py-5 bg-grey text-white">
            {/* Links Container */}
            <div>
                <div className="flex flex-col gap-20 sm:gap-20 md:flex-row md:gap-40 lg:gap-48 xl:gap-96 justify-start p-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold" >Contact</h1>
                        <h1 className="font-light cursor-pointer"  onClick={() => window.location.href = 'https://www.instagram.com/vfs_uci'}>Instagram</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>Discord</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://www.linkedin.com/company/verticalflightsocietyatuci/'}>LinkedIn</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://www.youtube.com/VTOLsociety'}>YouTube</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Resources</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://vtol.org'}>VFS Page</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Join</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'} >Contact</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>Events</h1>
                        <h1 className="font-light cursor-pointer" onClick={() =>window.location.href = 'https://discord.gg/vffMUEmuYq'}>About</h1>
                    </div>
                </div>

                {/* Line Divider*/}
                <div className = "px-5 ">
                    <hr className="border border-gray-300" />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-5 px-5">
                    <div className="flex flex-row items-center gap-5 pb-5 sm:pb-0">
                        <img src={vfsLogo} alt="vfs-logo" className="w-18 h-12" />
                        <h1 className = "font-semibold text-sm sm:text-2xl ">Vertical Flight Society at UCI</h1>
                    </div>

                    {/* Socials */} 
                    <div className="flex flex-row gap-8 text-red text-xl">
                        <Link to={"https://www.instagram.com/vfs_uci/"} className={"hover:text-yellow"}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to={"https://www.linkedin.com/company/the-vertical-flight-society-at-uci/"} className={"hover:text-yellow"}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link to={"https://www.youtube.com/VTOLsociety"} className={"hover:text-yellow"}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link to={"https://twitter.com/VTOLsociety"} className={"hover:text-yellow"}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to={"https://www.facebook.com/VTOLsociety"} className={"hover:text-yellow"}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
