"use client"
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useUpdatePendingLabRequestStatus } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { labDepts } from "@/TYPES/Lab/laboratories";
import { useRouter } from "next/navigation";
import { useContext } from "react";

 
 
export default function LabNotificationDetailElement({data}:{data:availableLabTestResults}) {

    const {setCompletedLabResults, completedResults} = useContext(DoctorContext) as mainDoctorContextType

    const router = useRouter()

    const mutation = useUpdatePendingLabRequestStatus()

    async function resumeConsultationFromNotification(){
       
        let resData;

        if(data.labDepartment.id == labDepts.BLOODBANK) resData = await mutation.mutateAsync(data.consultation.labResultsBloodBank)
        if(data.labDepartment.id == labDepts.IMMUNOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsImmunology)
        if(data.labDepartment.id == labDepts.MICROBIOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsMicrobiology)
        if(data.labDepartment.id == labDepts.PARASITOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsParasitology)

        if(resData?.status == 200){
            const hold = completedResults.filter( el => el.id != data.id)
            setCompletedLabResults(hold)
            resData?.status == 200 && router.push(`start/${data.patientID.id}/${data.patientName}`)
        }
        
        
    }



    return (
            <ul className=" sm:flex sm:justify-between  bg-white py-8 px-4 sm:px-6 2xl:px-12 rounded-lg shadow-xl"> 
                    <li>{data.labTestRequest} Lab results for patient {data.patientName.replaceAll("_"," ")} is available  </li>
                    
                    <li className=" flex justify-end">
                        <button 
                        onClick={resumeConsultationFromNotification}
                        className="px-4 py-4 mt-4  sm:mt-0 rounded-lg bg-[#00171F] text-white xl:hover:scale-95"
                        >
                            Resume&nbsp;Consultation&nbsp;{mutation.isPending && <ButtonSpinner/>}
                        </button>
                    </li>
            </ul>
    );
}