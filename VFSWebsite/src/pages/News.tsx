import React from "react";

export default function News(){
    return (
        <div className="flex justify-center p-4 overflow-hidden">
            <div className="w-full max-w-5xl h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh]">
                <iframe
                    src="https://verticalmag.com/email/newsletters/vertical-dn.html"
                    className="w-full h-full rounded-lg shadow-lg border"
                    style={{border: "none", overflow: "hidden"}}
                ></iframe>
            </div>
        </div>
    )
}