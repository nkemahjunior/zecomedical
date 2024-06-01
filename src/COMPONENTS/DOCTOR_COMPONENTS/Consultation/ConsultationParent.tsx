import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import StartConsultation from "./StartConsultation";
import PatientInfo from "./PatientInfo";

 
 
export default function ConsultationParent({consultationID, patientID, patientName}:{consultationID:string, patientID:string, patientName:string}) {
    return (
        <div className={`grid grid-cols-1 xl:grid-cols-[60fr,40fr] ${textStylesBody}`}>

            <div className="border-0 border-green-800 border-solid  row-start-2 xl:row-start-1">

             <StartConsultation consultationID={consultationID} patientID={patientID} patientName={patientName}/>
            </div>


           <PatientInfo patientID={patientID}/>


        </div>
    );
}