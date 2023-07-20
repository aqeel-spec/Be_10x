import { Blogs } from "@/lib/blogData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        const data = await Blogs;
        const blog = data.find((item) => item.title.toLowerCase() === id);

        return NextResponse.json({ blog });
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ msg: "something went wrong" });
    }
}