import VerifyEmail from "@/COMPONENTS/AUTH_COMPONENTS/VerifyEmail";

 
 
export default function page({params}:{params : {email:string}}) {


    const userEmail = params.email.replace('%40',"@")
    //console.log(userEmail)
    

    return (
        <>
           <VerifyEmail email={userEmail} /> 
        </>
    );
}