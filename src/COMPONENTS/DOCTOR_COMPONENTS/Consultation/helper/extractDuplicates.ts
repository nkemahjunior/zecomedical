import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";


interface seenType{
    id:boolean 
}

export function extractDuplicates(data:availableLabTestResults[]){

    const duplicates = []

    const seen: Record<number,boolean> = {
       //use record to define type of a key when using dynamic objects with no pre defined keys
    }

    data.forEach( (el,i) => {

        const id = el.patientID.id

        if( seen[id] == true){
            
            duplicates.push(el)

        }else{
            seen[id] = true
        }
    })
}