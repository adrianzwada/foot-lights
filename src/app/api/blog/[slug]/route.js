import { connectDb } from "../../../../constans/connectDb.js"
import { Post } from "../../../../constans/models.js"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const { slug } = params;
  
    try {
      connectDb();
  
      const post = await Post.findOne({ slug });
      return NextResponse.json(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
  
  export const DELETE = async (request, { params }) => {
    const { slug } = params;
  
    try {
      connectDb();
  
      await Post.deleteOne({ slug });
      return NextResponse.json("Post deleted");
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete post!");
    }
  };