import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    try{
        await mongoose.connect(connectionStr);
        const result = await Product.findById(params.id);
        return NextResponse.json({result, success: true});
    } catch {
        return NextResponse.json({result: 'not found', success: false});
    }
}