import Image from "next/image";

export default function PatientLogo() {
  return (
    <div
      className={` relative 
         h-[3rem] sm:h-[4rem] 2xl:h-[5rem] xl:w-[20rem] 2xl:w-[30rem] sm:w-[15rem] w-[12rem] lg:w-[15rem]
        `}
    >
      <Image
        className=""
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


/**
 * export default function PatientLogo() {
  return (
    <div
      className={` relative 
        border-solid border-2 border-red-700 h-full sm:h-[4rem] w-[9rem] lg:w-[15rem] 2xl:w-[20rem]      
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
 */