import StartConsultation from "@/COMPONENTS/DOCTOR_COMPONENTS/Consultation/StartConsultation";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page() {

    await roleCheckDoctors()

    return (
        <>
            <StartConsultation/>
        </>
    );
}