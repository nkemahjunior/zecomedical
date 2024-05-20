import AppointmentRequests from "@/COMPONENTS/DOCTOR_COMPONENTS/AppointmentRequests/AppointmentRequests";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page() {

   // await roleCheckDoctors();

    return (
        <>
           <AppointmentRequests/> 
        </>
    );
}