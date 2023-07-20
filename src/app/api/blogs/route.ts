import { NextRequest, NextResponse } from "next/server";
import { Blogs } from "@/lib/blogData";
import { json } from "stream/consumers";
import { v4 as uuid } from "uuid";


export const GET = async (request: NextRequest) => {
    try {
        const data = await Blogs;
        return NextResponse.json({ data });
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ msg: "something went wrong" });
    }
}
// export const POST = async (request : NextRequest) => {
//     const req = await request.json();
//     const uid = uuid();

//     try {
//         if(req) {
            
//           const res = await db.insert(cartTable).values({
//             title : req.title,
//             author : req.author,
//             description : req.description,
//             user_id : uid,
//             time : req.time,
//            }).returning()
//             return NextResponse.json({msg : "data added seccussfully", result : res})
//         }else {
//             throw new Error("Task field is required")
//         }
//     } catch (error) {
//         return NextResponse.json({ message : (error as {message : string}).message })
//     }
// }