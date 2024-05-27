import { getLabTechnician } from "@/DATA_FETCHING/AUTH/functions/getLabTechnician";
import { labDepartments, roles } from "@/TYPES/AuthTypes/AuthTypes";
import { redirect } from "next/navigation";

 
 
export default  async function Page() {

    const user = await getLabTechnician()

    if(!user || user.userID.role.id !== roles.LAB) redirect("/auth/signin")

    if(user.labDepartment.id == labDepartments.BLOODBANK) redirect("/lab/bloodBank")
    if(user.labDepartment.id == labDepartments.IMMUNOLOGY) redirect("/lab/immunology")
    if(user.labDepartment.id == labDepartments.MICROBIOLOGY) redirect("/lab/microbiology")
    if(user.labDepartment.id == labDepartments.PARASITOLOGY) redirect("/lab/parasitology")



    return (
        <div>
            redirecting......
        </div>
    );
}