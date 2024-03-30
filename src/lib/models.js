import Mongoose from "mongoose";
const userSchema = new Mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        avatar: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);
const postSchema = new Mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        userId: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique:true,
        },
    },
    { timestamps: true }
);

export const User = Mongoose.models.User || Mongoose.model("User", userSchema);
export const Post = Mongoose.models.Post || Mongoose.model("Post", postSchema);