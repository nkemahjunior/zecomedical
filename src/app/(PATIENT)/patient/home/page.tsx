import PatientHome from "@/COMPONENTS/PATIENT COMPONENTS/PatientHome";
import PatientNavBar from "@/COMPONENTS/PATIENT COMPONENTS/PatientNavBar";
import { roleCheckPatient } from "@/DATA_FETCHING/AUTH/functions/roleCheckPatient";


 
 
export default async function Page() {

    //page only for patients
    await roleCheckPatient()

    return (
        <div className="">
          <PatientHome/>
        </div>
    );
}