'use client'

import { medicalHistoryResponseType } from "@/TYPES/PatientAndDoctor/patientAndDoctorTypes";
import MedicalHistoryLab from "./MedicalHistoryLab";
import { textStylesH3, textStylesH4 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { extractDate } from "@/helpers/extractDate";

 
 
export default function MedicalHistoryChild({data}:{data:medicalHistoryResponseType}) {



    const {year,month,day} = extractDate(data.timestamp)


    return (
        <div>
            <div className="border-0 border-solid border-black pt-4">
                <dl className=" space-y-4">
            
                    <div className="space-y-1">
                        <dt className=" font-semibold">Date :</dt>
                        <dd className=" whitespace-nowrap capitalize">{day}-{month}-{year}</dd>
                    </div>

                    <div className="space-y-1">
                        <dt className=" font-semibold">Treated by :</dt>
                        <dd className=" whitespace-nowrap capitalize">Dr.{data.doctorID.uuid.name.replaceAll("_"," ")}</dd>
                    </div>

                    <div className="space-y-1">
                        <dt className=" font-semibold">Diagnosis Notes :</dt>
                        <dd className=" ">{data.diagnosisNotes}.</dd>
                    </div>


                    <div className="space-y-1">
                        <dt className=" font-semibold">Prescribe Drugs :</dt>
                        <dd className=" ">{data.medicinePrescribed}</dd>
                    </div>
                </dl>                    
            </div>


            <div>

                <h1 className={`${textStylesH3} text-black mt-4`}> Lab Results</h1>


                {
                    data.labResultsBloodBank && data.labResultsBloodBank.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                }



                {
                    data.labResultsImmunology && data.labResultsImmunology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                }



                {
                    data.labResultsMicrobiology && data.labResultsMicrobiology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                }



                {
                    data.labResultsParasitology && data.labResultsParasitology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                }

            </div>

    </div>
    );
}