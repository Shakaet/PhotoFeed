import { data } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { id } = context.params;

//   console.log(id)

  const singlecomment = data.find((item) => item.article_id === id);

  
  return NextResponse.json(singlecomment);
}

export async function DELETE(request, context) {
  const { id } = context.params;



  const filterData = data.filter((item) => item.article_id !== id);

  
  return NextResponse.json(filterData);
}

export async function PATCH(request, context) {
  const { id } = context.params;

  let comment=await request.json()



  const singleIndexFind = data.findIndex((item) => item.article_id !== id);

  data[singleIndexFind].title=comment.title
  data[singleIndexFind].author=comment.author

  
  return NextResponse.json(data[singleIndexFind]);
}


