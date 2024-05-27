import LabMicrobiologyParent from "@/COMPONENTS/LAB COMPONENTS/LabMicrobiology/LabMicrobiologyParent";
import { roleCheckLabMicroBiology } from "@/DATA_FETCHING/AUTH/functions/roleCheckLabTechnicians";

 
 
export default async function Page() {

    const user = await roleCheckLabMicroBiology()


    return (
        <>
            <LabMicrobiologyParent/>
        </>
    );
}