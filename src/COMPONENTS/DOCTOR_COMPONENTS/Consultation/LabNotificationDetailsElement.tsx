"use client"
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useUpdatePendingLabRequestStatus } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { labDepts } from "@/TYPES/Lab/laboratories";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

 
 
export default function LabNotificationDetailElement({data}:{data:availableLabTestResults}) {

    const {setCompletedLabResults, completedResults} = useContext(DoctorContext) as mainDoctorContextType

    const router = useRouter()

    const mutation = useUpdatePendingLabRequestStatus()

    async function resumeConsultationFromNotification(){
       
        let resData;

        /**
         * a new id is created anytime the doctor sends the patient to a lab, and we have four labs so four id, lets now the take the department id for each 
         * lab and compare, so we know the correct lab test id to use 
         * for any of the lab test ids, go to the waiting lab results table and mark completed as true
         */
        if(data.labDepartment.id == labDepts.BLOODBANK) resData = await mutation.mutateAsync(data.consultation.labResultsBloodBank!)
        if(data.labDepartment.id == labDepts.IMMUNOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsImmunology!)
        if(data.labDepartment.id == labDepts.MICROBIOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsMicrobiology!)
        if(data.labDepartment.id == labDepts.PARASITOLOGY) resData = await mutation.mutateAsync(data.consultation.labResultsParasitology!)

        if(resData?.status == 200){
            //const hold = completedResults.filter( el => el.id !== data.id)
            //setCompletedLabResults(hold) // doctor has seen and interacted with the notification, so remove it from the list of completed results
            toast.success(resData.message)

            
            
            resData?.status == 200 && router.push(`resume/${data.consultation.id}/${data.patientID.id}/${data.patientName}`)
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