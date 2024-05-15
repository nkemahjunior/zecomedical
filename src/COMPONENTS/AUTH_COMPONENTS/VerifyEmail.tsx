import Image from "next/image";
import { textStylesBody, textStylesH3, textStylesH4 } from "../GENERAL_STYLES/general";
import LogoBlack from "../GENERAL_STYLES/LogoBlack";

 
export default function VerifyEmail() {
    return (
        <>

            <LogoBlack/>
            <div className= {`h-screen w-screen flex justify-center items-center ${textStylesBody} text-black`}>

                <div className="">
                            
                    <div>
                        <h1 className={`${textStylesH3} font-medium`}> Email verification</h1>

                        <p>We sent an email to nkemahjunior@gmail.com to verify your email address. Please verify the email to continue </p>
                        
                        <h4 className={`${textStylesH4} font-medium mt-16 text-black`}>Not seeing the email ?</h4>
                        <p>Please check your spam folder or <span>resend email</span></p>
                    </div>

                </div>

        </div>
       </>

    );
}