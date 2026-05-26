import Signup from "@/models/signup";
import connectDB from "@/lib/connectDB";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password } = body;

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return Response.json(
        {status: "fail",
          message: "User already exists",
        }, { status: 400 }
      );}

    // Create new user
    const newSignup = await Signup.create({ name,  email,  password, });
    return Response.json({
      status: "success",
      data: newSignup,
    });
} catch (error) {
    return Response.json(
      {status: "fail",
        error: error.message,},
      { status: 500 }
    );}
}