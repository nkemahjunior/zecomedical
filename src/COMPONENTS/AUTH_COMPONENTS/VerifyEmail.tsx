'use client'
import { textStylesBody, textStylesH3, textStylesH4 } from "../GENERAL_STYLES/general";
import LogoBlack from "../GENERAL_STYLES/LogoBlack";
import Link from "next/link";
import { useResendEmail } from "@/DATA_FETCHING/AUTH/hooks/useResendEmail";
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner";

 
export default function VerifyEmail({email}:{email:string}) {


    const mutation = useResendEmail()

  
    async function resend(){
        mutation.mutate(email)
    }


    return (
        <>

            <LogoBlack/>
            <div className= {`h-screen w-screen flex justify-center items-center ${textStylesBody} text-black`}>

                <div className=" w-[95%] md:w-[70%] xl:w-[60%]">
                            
                    <div>
                        <h1 className={`${textStylesH3} font-medium`}> Email verification</h1>

                        <p>We sent an email to {email} to verify your email address. Please verify the email to continue </p>
                        
                        <h4 className={`${textStylesH4} font-medium mt-16 text-black`}>Not seeing the email ?</h4>
                        <p>Please check your spam folder or&nbsp;&nbsp;
                            <span 
                            onClick={resend}
                                className=" cursor-pointer xl:hover:scale-95 bg-[#24312F] text-white rounded-lg p-3 inline-block w-fit"
                            >
                                resend email {mutation.isPending && <ButtonSpinner/>}
                            </span>
                        </p>

                        <h4 className={`${textStylesH4} font-medium mt-16 text-black`}>Already verified email ?</h4>
                        <Link className=" underline" href={"/auth/signin"}>Proceed and signin</Link>

                    </div>

                </div>

        </div>
       </>

    );
}