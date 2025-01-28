import vfsLogo from "../assets/images/vfs-symbol-small3.webp";
import Youtube from "../assets/images/logos/youtube.svg"
import Linkedin from "../assets/images/logos/linkedin.svg"
import Twitter from "../assets/images/logos/twitter.svg"
import Instagram from "../assets/images/logos/instagram.svg"
import Facebook from "../assets/images/logos/facebook.svg"

export default function Footer() {
    return (
        <div className = "p-20">
            {/* Links Container */}
            <div>
                <div className="flex flex-row justify-start gap-96 p-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Contact</h1>
                        <h1 className="font-light">Instagram</h1>
                        <h1 className="font-light">Discord</h1>
                        <h1 className="font-light">LinkedIn</h1>
                        <h1 className="font-light">YouTube</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Resources</h1>
                        <h1 className="font-light">VFS Page</h1>
                        <h1 className="font-light">Student Handbook</h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold">Join</h1>
                        <h1 className="font-light">Contact</h1>
                        <h1 className="font-light">Events</h1>
                        <h1 className="font-light">About</h1>
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
                    <div className="flex flex-row gap-5">
                        <img src = {Instagram} alt="social-icon" />
                        <img src = {Linkedin} alt="social-icon" />
                        <img src = {Youtube} alt="social-icon" />
                        <img src = {Twitter} alt="social-icon" />
                        <img src = {Facebook} alt="social-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
