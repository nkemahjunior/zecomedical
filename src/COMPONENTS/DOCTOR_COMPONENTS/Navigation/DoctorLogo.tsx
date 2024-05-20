import Image from "next/image";


export default function DoctorLogo() {
    return (
        <div className={` relative 
        border-solid border-0 border-blue-700 h-full lg:h-[4rem] lg:w-[20rem] 2xl:w-[25rem]      
         lg:mt-[1.4rem]  2xl:mt-[1.6rem]    
        `}>

        <Image className="block"  src={"/logo_email.png"} alt="logo" fill={true} quality={100} priority={true}  style={{objectFit:"contain"}}/>

    </div>
    );
}