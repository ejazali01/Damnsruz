import { dbConnect } from "@/lib/database";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import User from "@/models/User";


export async function POST(req){
    try{
        const {name,email,password } = await req.json();
        await dbConnect();
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({name,email,password : hashedPassword})

      return  NextResponse.json({message:"created sucessfully",
      data:{name,email },
        }, {status:201})
    }catch(error){
        return NextResponse.json({
            message:"An error occur while regestring user",
            error
    }, {status:500})
    }
 
}
