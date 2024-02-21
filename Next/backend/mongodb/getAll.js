import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await mongoose.connect(connectionStr);
        const data = await Product.find();
        return NextResponse.json({result: data, success: true})
    } catch {
        return NextResponse.json({result: "Error", success: false})
    }
}