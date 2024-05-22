import CreateAppointment from "@/COMPONENTS/DOCTOR_COMPONENTS/CreateAppointment/CreateAppointment";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page() {

    await roleCheckDoctors()

    return (
        <>
           <CreateAppointment/>
        </>
    );
}