import React from "react";
import smallLogo from "../assets/images/vfs-symbol-small3.webp"

export default function CustomLogo() {
    return (
        <div className={"flex gap-2 text-3xl"}>
            <img src={smallLogo} alt="Vertical Flight Society Symbol" className="w-[60px]" />
            <p className={"font-semibold"}>VFS at UCI</p>
        </div>
    )
}