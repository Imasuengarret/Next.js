import { NextResponse } from "next/server";
import connect from "../../../LB/db";
import user from '../../../LB/Models/User'
 


export const GET = async () =>{
    try {
        await connect();
        const users = await user.find();
        return new NextResponse(JSON.stringify(users),{status: 200})
    } catch (error) {
        return new NextResponse("Error in fetching users" + error.message, {status: 500})
    }
  
}

