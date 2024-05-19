import SetUpAccount from "@/COMPONENTS/SET_UP_ACCOUNT/SetUpAccount";
import { roleCheckSetUpAccount } from "@/DATA_FETCHING/AUTH/functions/roleCheckSetUpAccount";


 
 
export default async function Page() {
    

    //page is only for Verified users who dont yet have a role of either: patient, doctor or labTech
    await roleCheckSetUpAccount()

    return (
       <>
            <SetUpAccount/>
       </>
    );
}