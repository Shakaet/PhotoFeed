import { data } from "@/data";
import { NextResponse } from "next/server";

   
export async function  GET() {

      return NextResponse.json(data)


    
}