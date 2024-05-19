import AvailableDoctorsSeeAll from "@/COMPONENTS/PATIENT COMPONENTS/AvailableDoctorsSeeAll";
import { roleCheckPatient } from "@/DATA_FETCHING/AUTH/functions/roleCheckPatient";

 
 
export default async  function Page() {

        //page only for patients
        await roleCheckPatient()

    return (
        <>
            <AvailableDoctorsSeeAll/>
        </>
    );
}