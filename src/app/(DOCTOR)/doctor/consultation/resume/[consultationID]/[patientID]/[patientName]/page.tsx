import ResumeConsultation from "@/COMPONENTS/DOCTOR_COMPONENTS/Consultation/ResumeConsultation";
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";


export default async function Page({params}:{params:{consultationID:string, patientID:string, patientName:string}}) {

    //console.log(params);

    
    await roleCheckDoctors()

    return (
        <>
            <ResumeConsultation consultationID = {params.consultationID} patientID={params.patientID} patientName={params.patientName}/>
        </>
    );
}