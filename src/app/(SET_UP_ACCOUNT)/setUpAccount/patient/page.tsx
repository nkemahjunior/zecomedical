import SetUpAccountPatient from "@/COMPONENTS/SET_UP_ACCOUNT/PATIENT/SetUpAccountPatient";
import { roleCheckSetUpAccount } from "@/DATA_FETCHING/AUTH/functions/roleCheckSetUpAccount";


 
 
export default async function Page() {

    //page is only for Verified users who dont yet have a role of either: patient, doctor or labTech
    await roleCheckSetUpAccount()

    return (
        <>
            <SetUpAccountPatient/>
        </>
    );
}