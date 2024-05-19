import MedicalHistoryHome from "@/COMPONENTS/PATIENT COMPONENTS/MEDICAL_HISTORY/MedicalHistoryHome";
import { roleCheckPatient } from "@/DATA_FETCHING/AUTH/functions/roleCheckPatient";

 
 
export default async function Page() {

        //page only for patients
        await roleCheckPatient()

    return (
        <>
            <MedicalHistoryHome/>
        </>
    );
}