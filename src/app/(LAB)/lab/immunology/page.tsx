import LabImmunologyParent from "@/COMPONENTS/LAB COMPONENTS/LabImmunology/LabImmunologyParent";
import { roleCheckLabImmunology } from "@/DATA_FETCHING/AUTH/functions/roleCheckLabTechnicians";

 
 
export default async function  Page() {

    const user = await roleCheckLabImmunology()
    return (
        <>
            <LabImmunologyParent/>
        </>
    );
}