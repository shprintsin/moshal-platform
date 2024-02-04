import { NextResponse } from "next/server";
import {connectToDB} from "@/app/utils/connect";

export async function GET(request,context) {
  const {params} = context

  try{
        const db = await connectToDB()
        const data = db.users.find(user => user.id.toString() === params.id.toString());
 
     return NextResponse.json(data)
    }
    catch(err){
        console.log(err);
        return new NextResponse({status:500,body:err})
    }
    
}
  