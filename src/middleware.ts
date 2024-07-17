import { getUser } from "@/DATA_FETCHING/AUTH/functions/getUser";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request:NextRequest){

    const requestUrl = new URL(request.url)

    /* not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
    const session = await getUser();   
 
     if(!session || session?.isAuthenticated == false) {
         return NextResponse.redirect(new URL('/auth/signin', request.url))
     }*/

}

export const config = {
    matcher: ['/setUpAccount/:path*','/patient/:path*','/doctor/:path*','/lab/:path*'],
  }