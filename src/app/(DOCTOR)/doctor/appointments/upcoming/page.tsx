
import UpcomingAppointmentsDoc from "@/COMPONENTS/DOCTOR_COMPONENTS/UpcomingAppointments/UpcomingAppointmentsDoc";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page() {

    await roleCheckDoctors();
    return (
        <>
           <UpcomingAppointmentsDoc/> 
        </>
    );
}