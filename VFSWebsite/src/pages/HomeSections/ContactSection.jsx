import React from "react";
import Plane from "../../assets/images/plane.jpg";

export default function ContactSection() {

    return (
        <div className="relative w-screen h-[40rem]">
            <img
                src={Plane}
                alt="Plane in clouds"
                className="w-screen h-[40rem] object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-black gap-10 ">
                <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg px-10 py-5">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 border border-[#B0B0B0]"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 border border-[#B0B0B0]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 border border-[#B0B0B0]"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 border border-[#B0B0B0]"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Type your message here"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-1 border border-[#B0B0B0]"
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
