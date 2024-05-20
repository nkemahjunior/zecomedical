
import { roleCheckDoctors } from "@/DATA_FETCHING/AUTH/functions/roleCheckDoctors";

 
 
export default async function Page() {

    await roleCheckDoctors()

   return(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium labore rem accusamus voluptate eum. Ex reiciendis est eum! Natus magnam harum laudantium iusto sunt ullam repellat eos quas culpa assumenda magni molestias eaque illo blanditiis fugiat, facilis sapiente doloremque distinctio porro obcaecati totam at nam! Nisi obcaecati sunt eveniet.</p>
   );
}