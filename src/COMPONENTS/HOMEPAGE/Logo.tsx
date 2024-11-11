import Image from "next/image";
import Link from "next/link";

 
 
export default function Logo() {
    return (
      <Link href={"/"}>
        <div
          className={`border-solid border-0 border-blue-700 h-[3rem] sm:h-[4rem] 2xl:h-[5rem] xl:w-[20rem] 2xl:w-[30rem] sm:w-[15rem] w-[12rem] lg:w-[15rem]  relative 
            ml-[1rem]   xl:ml-[2rem]     
            
            `}
        >
          <Image
            className=" border-0 border-solid border-yellow-400"
            src={"/logo3.png"}
            alt="logo"
            fill={true}
            quality={100}
            priority={true}
          />
        </div>
      </Link>
    );
}



// export default function Logo() {
//   return (
//     <Link href={"/"}>
//       <div
//         className={`border-solid border-2 border-blue-700 h-full sm:h-[4rem] w-[9rem] lg:w-[15rem]  relative 
//             ml-[1rem]   xl:ml-[2rem]     
//             sm:mt-[2.5rem] md:mt-[2.5rem] 2xl:mt-[2rem]  md:w-[12rem]   2xl:w-[25rem]
//             `}
//       >
//         <Image
//           className="block"
//           src={"/logo3.png"}
//           alt="logo"
//           fill={true}
//           quality={100}
//           priority={true}
//           style={{ objectFit: "contain" }}
//         />
//       </div>
//     </Link>
//   );
// }