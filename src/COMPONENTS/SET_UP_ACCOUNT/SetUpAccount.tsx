import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../GENERAL_STYLES/LogoBlack";

 
 
export default function SetUpAccount() {
    return (
        <>
            <LogoBlack/>
            <div className={`h-[100dvh] w-screen flex justify-center items-center ${textStylesBody} `}>

                <div className="space-y-8 ">
                    <h1 className={`${textStylesH3}`}>What&apos;s your role?</h1>
                    <div className="space-y-6">

                        <Link className="block py-4 text-center bg-[#24312F] rounded-md text-white xl:hover:scale-95" 
                        href={"/setUpAccount/doctor"} >
                            Doctor
                        </Link>

                        <Link className="block py-4 text-center bg-[#24312F] rounded-md text-white xl:hover:scale-95" 
                        href={"/setUpAccount/labTechnician"}>
                            Lab Technician
                        </Link>

                        <Link className="block py-4 text-center bg-[#24312F] rounded-md text-white xl:hover:scale-95" 
                        href={"/setUpAccount/patient"}>
                            Patient
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}