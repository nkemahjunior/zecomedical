import { useQuery } from "@tanstack/react-query";
import { getAvailableDoctorsHome } from "../functions/getAvailableDoctors";


export function useGetAvailableDoctorsHome(searchValue:string){

    const query = useQuery({
        queryKey:["avlDoc3", searchValue],
        queryFn: () => getAvailableDoctorsHome(searchValue)
    })

    return query
}