"use server"
import { connect } from "mongoose"
import { connectDb } from "./connectDb"
import { Post } from "./models"
import { revalidatePath } from "next/cache"

export const addPost = async(formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try{
        connectDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        }) 
        await newPost.save();
        console.log('saved to db')
        revalidatePath("/blog")
    }
    catch(err){
        console.log(err)
        return{error:'Something went wrong try later!'}
    }
        
}
export const deletePost = async(formData) => {
    const { id } = Object.fromEntries(formData)
    
    try{
        connectDb()

        await Post.findByIdAndDelete(id);
        console.log('deleted from db')
        console.log(id)
        revalidatePath("/blog")
    }
    catch(err){
        console.log(err)
        return{error:'Something went wrong try later!'}
    }
        
}