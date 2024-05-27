
import ConsultationParent from "@/COMPONENTS/DOCTOR_COMPONENTS/Consultation/ConsultationParent";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page({params}:{params:{patientID:string, patientName:string}}) {

    //console.log(params);

    
    await roleCheckDoctors()

    return (
        <>
            <ConsultationParent patientID={params.patientID} patientName={params.patientName}/>
        </>
    );
}