import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function POST(request: Request) {
  const { title, imageUrl, tag } = await request.json();

  console.log("TITLE FROM API/SHAREPOST: ", title);
  console.log("IMAGEURL FROM API/SHAREPOST: ", imageUrl);
  console.log("TAG FROM API/SHAREPOST: ", tag);

  const data = await prisma.post.create({
    data: {
      title,
      imageUrl,
      tag,
    },
  });

  return NextResponse.json({ data }, { status: 200 });
}
