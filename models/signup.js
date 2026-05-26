import mongoose from "mongoose";

const SignupSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true},
},{
    timestamps:true,
})

export default mongoose.models.Signup || mongoose.model("Signup", SignupSchema)