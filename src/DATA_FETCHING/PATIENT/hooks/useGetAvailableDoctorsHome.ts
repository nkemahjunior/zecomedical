import { useQuery } from "@tanstack/react-query";
import { getAvailableDoctorsHome } from "../functions/getAvailableDoctors";


export function useGetAvailableDoctorsHome(){

    const query = useQuery({
        queryKey:["avlDoc3"],
        queryFn : getAvailableDoctorsHome
    })

    return query
}