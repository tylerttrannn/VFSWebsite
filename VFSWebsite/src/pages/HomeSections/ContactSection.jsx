import React from "react";
import Plane from "../../assets/images/plane.jpg";
import emailjs from 'emailjs-com';
import { toast } from "sonner"


const SERVICE_ID = "service_fq0i2aa";
const TEMPLATE_ID = "template_17hi35r";
const PUBLIC_KEY = "DXW_640i7txCjk62K";

export default function ContactSection() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                toast.success("Message Sent Successfully!")
            }, () => {
                toast.error("Something went wrong. Try again later.")
            });
        e.target.reset()
    };
    return (
        <div className="relative h-[40rem]">
            <img
                src={Plane}
                alt="Plane in clouds"
                className="w-screen h-[40rem] object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-black gap-10 ">
                <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg px-10 py-5">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="from_firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text" id="from_firstname" name="from_firstname"
                                placeholder="Enter your first name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 pl-2 border border-[#B0B0B0]"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="from_lastname" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text" id="from_lastname" name="from_lastname"
                                placeholder="Enter your last name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 pl-2 border border-[#B0B0B0]"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email" id="from_email" name="from_email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 pl-2 border border-[#B0B0B0]"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Enter your phone number"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 pl-2 border border-[#B0B0B0]"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Type your message here"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 pl-2 border border-[#B0B0B0]"
                                required={true}
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="text-white bg-black px-6 py-2 rounded-lg hover:bg-gray-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
