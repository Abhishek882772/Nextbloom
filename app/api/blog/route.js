import connectDB from "@/lib/connectDB";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });
    return Response.json(blogs);
  } catch (error) {

    return Response.json(
      { status: "fail",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newBlog = await Blog.create({
      input: body.input,
      caption: body.caption,
    });

    return Response.json({
      status: "success",
      data: newBlog,
    });
  } catch (error) {
    return Response.json(
      {status: "fail",
        error: error.message,
      },{ status: 500 }
    );
  }
}