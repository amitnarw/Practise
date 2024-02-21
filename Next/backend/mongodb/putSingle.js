import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    let payload = await req.json();
    try{
        await mongoose.connect(connectionStr);
        const result = await Product.findByIdAndUpdate({_id: params.id}, payload);
        return NextResponse.json({result, success: true});
    } catch {
        return NextResponse.json({result: "Error", success: false});
    }
}