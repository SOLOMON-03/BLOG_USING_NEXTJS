import { Post, User } from "./models";
import { ConnectDB } from "./utils";


export const getPosts = async ()=>{
    try {
        ConnectDB();
        const posts = Post.find();
        return posts;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}

export const getPost = async (slug)=>{
    try {
        ConnectDB();
        const post = Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}
export const getUser = async (id)=>{
    try {
        ConnectDB();
        const user = User.findById(id);
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user!");
    }
}
export const getUsers = async ()=>{
    try {
        ConnectDB();
        const users = User.find();
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!");
    }
}