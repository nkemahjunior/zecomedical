import AppointmentHistoryHome from "@/COMPONENTS/PATIENT COMPONENTS/APPOINTMENT_HISTORY/AppointmentHistoryHome";
import { roleCheckPatient } from "@/DATA_FETCHING/AUTH/functions/roleCheckPatient";

 
 
export default async function Page() {

    //page only for patients
    await roleCheckPatient()

    return (
        <>
            <AppointmentHistoryHome/>
        </>
    );
}