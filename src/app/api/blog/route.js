import { connectDb } from "@/constans/connectDb"
import { Post } from "@/constans/models"
import { NextResponse } from "next/server"

export const GET = async (request) => {

    try{
        connectDb()
        const posts = await Post.find()
        return NextResponse.json(posts)

    }
    catch(err){
        console.log(err)
        throw new Error('failed to fetch')
    }

}