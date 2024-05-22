import SetUpAccountLabTechnician from "@/COMPONENTS/SET_UP_ACCOUNT/LAB_TECHNICIAN/SetUpAccountLabTechnician";
import { roleCheckSetUpAccount } from "@/DATA_FETCHING/AUTH/functions/roleCheckSetUpAccount";


 
 
export default async function Page() {

    //page is only for Verified users who dont yet have a role of either: patient, doctor or labTech
    await roleCheckSetUpAccount()

    return (
        <>
            <SetUpAccountLabTechnician/>
        </>
    );
}