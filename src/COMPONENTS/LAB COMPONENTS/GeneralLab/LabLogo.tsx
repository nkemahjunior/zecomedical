import Image from "next/image";
import Link from "next/link";


export default function LabLogo() {
    return (
      <div
        className={` relative 
        border-solid border-0 border-blue-700 h-full sm:h-[4rem] w-[9rem] lg:w-[15rem] 2xl:w-[20rem]      
        sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.8rem] 2xl:mt-[0.6rem]  md:w-[12rem]   
        `}
      >
        <Image
          className="block"
          src={"/logo3.png"}
          alt="logo"
          fill={true}
          quality={100}
          priority={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
}