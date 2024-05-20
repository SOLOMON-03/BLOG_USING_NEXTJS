"use server";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { ConnectDB } from "./utils";
import bcryptjs from "bcryptjs";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect"

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
export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat } =
        Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return { error: "Password do not Match" };
    }
    try {
        ConnectDB();
        const user = await User.findOne({ username });
        const hashedpassword = bcryptjs.hashSync(password, 10);
        if (user) {
            return { error: "Username already exits!" };
        }
        const newUser = new User({
            username,
            email,
            password: hashedpassword,
        });
        await newUser.save();
        console.log("saved to DB");
        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
};
export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", {
            username,
            password,
        });
    } catch (error) {
        console.log(error);
        if(error.message.includes("CredentialsSignin")){
            return { error: "Invalid username or password"};
        }
        if(isRedirectError(error)) throw error;
    }
};
