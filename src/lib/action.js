"use server";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { ConnectDB } from "./utils";
import bcryptjs from 'bcryptjs'

export const addPost = async (formData) => {
    const { title, desc, slug, img, userId } = Object.fromEntries(formData);
    try {
        ConnectDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log("saved to db");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
};
export const loginwithGithub = async () => {
    await signIn("github");
};
export const loginwithGoogle = async () => {
    await signIn("google");
};
export const handleLogout = async () => {
    await signOut();
};
export const register = async (formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData);
    if(password !== passwordRepeat){
        return "Password do not Match";
    }
    try {
        ConnectDB();
        const user = await User.findOne({username});
        const hashedpassword = bcryptjs.hashSync(password, 10);
        if(user){
            return "Username already exits!"
        }
        const newUser = new User({
            username,
            email,
            password: hashedpassword
        });
        await newUser.save();
        console.log("saved to DB")
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}