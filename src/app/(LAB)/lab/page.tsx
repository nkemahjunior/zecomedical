
import RedirectLab from "@/COMPONENTS/LAB COMPONENTS/RedirectLab";
import { getLabTechnician } from "@/DATA_FETCHING/AUTH/functions/getLabTechnician";
import { labDepartments, roles } from "@/TYPES/AuthTypes/AuthTypes";
import { redirect } from "next/navigation";

 
 
export default  async function Page() {

    //const user = await getLabTechnician()
    // console.log(user);
    // console.log("------------------------");

    // if(!user || user.userID.role.id !== roles.LAB) redirect("/auth/signin")

    // if(user.labDepartment.id == labDepartments.BLOODBANK) redirect("/lab/bloodBank")
    // if(user.labDepartment.id == labDepartments.IMMUNOLOGY) redirect("/lab/immunology")
    // if(user.labDepartment.id == labDepartments.MICROBIOLOGY) redirect("/lab/microbiology")
    // if(user.labDepartment.id == labDepartments.PARASITOLOGY) redirect("/lab/parasitology")



    return (
      ///*fetching on client because its not working in production, the getLabTechnician() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
      <RedirectLab />
    );
}