import Image from "next/image";

 
 
export default function Logo() {
    return (
        <div className={`border-solid border-2 border-blue-700 h-full sm:h-[4rem] w-[9rem] lg:w-[15rem]  relative 
                
        sm:mt-[0.8rem] md:mt-[1rem] 2xl:mt-[0.4rem]  md:w-[12rem]   2xl:w-[25rem]
        `}>

        <Image className="block"  src={"/logo3.png"} alt="logo" fill={true} quality={100} priority={true}  style={{objectFit:"contain"}}/>

    </div>
    );
}