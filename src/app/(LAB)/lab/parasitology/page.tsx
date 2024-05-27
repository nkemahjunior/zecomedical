import LabParasitologyParent from "@/COMPONENTS/LAB COMPONENTS/LabParasitology/LabParasitologyParent";
import { roleCheckParasitology } from "@/DATA_FETCHING/AUTH/functions/roleCheckLabTechnicians";

 
 
export default async function Page() {

    const user = await roleCheckParasitology()
    
    return (
        <>
            <LabParasitologyParent/>
        </>
    );
}