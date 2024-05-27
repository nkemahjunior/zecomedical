import LabBloodBankParent from "@/COMPONENTS/LAB COMPONENTS/LabBloodBank/LabBloodBankParent";
import { roleCheckLabBloodBank } from "@/DATA_FETCHING/AUTH/functions/roleCheckLabTechnicians";

 
 
export default async function Page() {

    const user  = await roleCheckLabBloodBank()
    
    return (
        <>
            <LabBloodBankParent/>
        </>
    );
}