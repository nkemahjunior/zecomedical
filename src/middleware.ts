import { getUser } from "@/DATA_FETCHING/AUTH/functions/getUser";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request:NextRequest){

    const requestUrl = new URL(request.url)

    const session = await getUser();

    //console.log(session);

   

   
 
   /* if(!session || session?.isAuthenticated == false) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }*/

}

export const config = {
    matcher: ['/setUpAccount/:path*','/patient/:path*','/doctor/:path*','/labTechnician/:path*'],
  }