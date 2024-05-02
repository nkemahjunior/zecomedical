import { baseTextColor } from "@/COMPONENTS/GENERAL_STYLES/general";
import Image from "next/image";

 
 
export default function BlogSection() {
    return (
        <>
            <div className="border-solid border-2 border-violet-950">

                <div className="flex justify-center
                mt-[4rem] sm:mt-[6rem] lg:mt-[8rem] xl:mt-[10rem] 2xl:mt-[12rem]
                mb-[4rem] sm:mb-[6rem] lg:mb-[8rem] xl:mb-[10rem] 2xl:mb-[12rem]
                ">
                    <h2 className={` 
                    
                    text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                    text-[${baseTextColor}]
                    lg:w-[70%] tracking-tight`
                    }>
                                Our&nbsp; 
                                <span className="text-[#3D96A7]">News and Blogs</span>
                    </h2>
                </div>

                <div className={`relative  bg-white
                        pt-12 px-6 sm:pt-20 
                        w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden  rounded-xl shadow-xl `}>
                    <Image alt="blog" src={"/blog1.jpg"} fill style={{objectFit:"contain"}}/>
                </div>

                <div className={``}></div>
                <div className={``}></div>
                <div className={``}></div>

            </div>
        </>
    );
}