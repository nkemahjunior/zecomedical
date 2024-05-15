import Image from "next/image";

 
 
export default function Logo() {
    return (
        <div className={`border-solid border-0 border-blue-700 h-full sm:h-[4rem] w-[9rem] lg:w-[15rem]  relative 
        ml-[1rem]   xl:ml-[2rem]     
        sm:mt-[2.5rem] md:mt-[2.5rem] 2xl:mt-[2rem]  md:w-[12rem]   2xl:w-[25rem]
        `}>

        <Image className="block"  src={"/logo3.png"} alt="logo" fill={true} quality={100} priority={true}  style={{objectFit:"contain"}}/>

    </div>
    );
}