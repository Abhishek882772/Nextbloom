import mongoose from "mongoose";
import Blog from "../../../models/blog";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    await mongoose.connect(process.env.MongoDB_URL);

    console.log("MongoDB Connected");

  } catch (error) {
    console.log("Mongo Error:", error);
  }
};

export async function POST(req) {

  try {

    await connectDB();

    // READ BODY ONLY ONCE
    const body = await req.json();

    const { input, caption } = body;

    const newBlog = new Blog({
      input,
      caption,
    });

    await newBlog.save();

    return Response.json({
      status: "success",
    });

  } catch (error) {

    console.log("POST ERROR:", error);

    return Response.json(
      {
        status: "fail",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return Response.json(blogs);

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        status: "fail",
        error: error.message,
      },
      { status: 500 }
    );
  }
}