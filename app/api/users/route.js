import { NextResponse } from "next/server";

export async function POST(request){
    const data = await request.json();
    console.log(data);

    return NextResponse.json({
        message : "created sucessfully"
    });
}


export function GET(request){
    const users = [
        {
            "name":"ejaz ali",
            "email":"ejaz84916@gmail.com",
            "address":"delhi",
            "contact":"367823423",
        },
        {
            "name":"shyan ali",
            "email":"shyan66@gmail.com",
            "address":"bihar",
            "contact":"63748348",
        },
        {
            "name":"haider ali",
            "email":"haider@gmail.com",
            "address":"mumbai",
            "contact":"6472890199",
        },
    ]
   console.log("hello get request with user data")

    return NextResponse.json(users);
}