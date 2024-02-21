import { NextResponse } from "next/server";
import { users } from "@/util/db";

export async function GET(req, {params}){

    const data = users.filter((x) => x.id == params.id);
    if(data.length == 0){
        return NextResponse.json({result: "Not found", success: false}, {status: 400});
    } else {
        return NextResponse.json({result: data, success: true}, {status: 200});
    }
}

export async function PUT(req, {params}){
    let payload = await req.json();
    payload.id = params.id;
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: "Please fill all required fields", success: false}, {status: 400})
    } else {
        return NextResponse.json({result: payload, success: true}, {status: 200});
    }
}

export async function DELETE(req, {params}){

    let id = params.id;
    if(id){
        return NextResponse.json({result: "Changes made successfully", success: true}, {status: 200});
    } else {
        return NextResponse.json({result: "Error", success: false}, {status: 400});
    }
}

