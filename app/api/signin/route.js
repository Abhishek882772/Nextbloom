import connectDB from "@/lib/connectDB";
import Signup from "@/models/signup";

export async function POST(req) {
    try{
        await connectDB();
        const body =await req.json();
        const {email,password}=body;
        const existingUSer=await Signup.findOne({email});
        if(!existingUSer){
            return Response.json({status:"fail", message:"User not found"},{status:404});
        }
        if(existingUSer.password!==password){
            return Response.json({status:"fail", message:"Incorrect password"},{status:401});
        }
        return Response.json({status:"success", data:existingUSer},{status:200});
    }catch(error){
        return Response.json({status:"fail", error:error.message},{status:500});
    }
    }