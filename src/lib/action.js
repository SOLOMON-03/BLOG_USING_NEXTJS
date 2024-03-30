import { Post } from "./models";
import { ConnectDB } from "./utils";

export const addPost = async(formData)=>{
    "use server";

    const {title,desc,slug,img,userId} = Object.fromEntries(formData);
    try {
        ConnectDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save();
        console.log("saved to db");
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong!"}
    }
}