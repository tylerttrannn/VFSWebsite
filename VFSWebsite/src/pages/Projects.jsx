import Footer from "../components/Footer";
import samepleImage from "../assets/images/hero.webp"

export default function Projects(){
    return (
        <div>
            <h1 className = "text-center text-6xl font-bold mt-20">Past Projects </h1>
            {/*Project 1  */ }
            <div className = "flex flex-col items-center justify-center max-w-6xl mx-auto py-16 px-6 gap-10 text-center">
                <img src= {samepleImage}></img>
                <h1 className = "text-4xl text-[#C30D3B] font-bold"> ZTol Senior Design Project </h1>
                <div className = "">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa rerum architecto laboriosam odio, tempore velit. Magnam natus impedit ad adipisci tempora dolorem autem accusamus amet delectus totam recusandae, nostrum sint, fugiat velit nemo dolores doloribus minima praesentium modi similique alias tempore odit. Minus dolorem possimus modi nemo consectetur debitis autem?</p>
                </div>
            </div>

            {/*Project 2  */ }
            <div className = "flex flex-col items-center justify-center max-w-6xl mx-auto py-16 px-6 gap-10 text-center">
                <img src= {samepleImage}></img>
                <h1 className = "text-4xl text-[#C30D3B] font-bold"> ZTol Senior Design Project </h1>
                <div className = "">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa rerum architecto laboriosam odio, tempore velit. Magnam natus impedit ad adipisci tempora dolorem autem accusamus amet delectus totam recusandae, nostrum sint, fugiat velit nemo dolores doloribus minima praesentium modi similique alias tempore odit. Minus dolorem possimus modi nemo consectetur debitis autem?</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}