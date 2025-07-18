import { getPhotoById } from "@/app/lib/image-data";
import { NextResponse } from "next/server";




export async function GET(request,context){


    let {params}= context

     let id= params.id
     
    console.log(id)

    let data= getPhotoById(id)

    return NextResponse.json(data)


     

}