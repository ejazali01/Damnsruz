import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import { NextResponse } from "next/server";


dbConnect();

export async function GET(request){
    const {name} = await request.json();

    const user = await User.findOne({name})
    console.log(user);

    return NextResponse.json({
        message : "created sucessfully"
    });
}
