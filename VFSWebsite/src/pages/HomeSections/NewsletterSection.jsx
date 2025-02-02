import React from "react";
import Logo from "../../assets/images/helicopter-path.png"

export default function NewsletterSection() {
    const [email, setEmail] = React.useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();
    }
    return (
        <div className={"bg-red text-white flex flex-col items-center justify-center pb-16 gap-3"}>
            <img src={Logo} alt={"newsletter logo"} className={"w-36"} />
            <div className={"flex flex-col gap-3 items-center justify-center"}>
                <h1 className={"text-2xl font-semibold"}>Love Vertical Flight Society?</h1>
                <p className={"text-md"}>Join our newsletter below!</p>
                <form>
                    <input
                        placeholder={"Email"}
                        type={"text"} className={"text-black rounded-sm p-2 pr-20"}
                        onSubmit={handleSubmit}
                        onChange={(e) => setEmail(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}