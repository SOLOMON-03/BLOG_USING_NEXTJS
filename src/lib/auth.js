import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { ConnectDB } from "./utils";
import { User } from "./models";
import bcryptjs from 'bcryptjs';
import { authConfig } from "./auth.config";

const login = async(credentials) =>{
    try {
        ConnectDB();
        const user = await User.findOne({username: credentials.username});

        if(!user) throw new Error("Wrong credentials!");

        const isPasswordValid = bcryptjs.compareSync(credentials.password, user.password);
        if(!isPasswordValid) throw new Error("Wrong password!");
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to login!");
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "github") {
                ConnectDB();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const generatedPassword =
                            Math.random().toString(36).slice(-8) +
                            Math.random().toString(36).slice(-8);
                        const hashedpassword = bcryptjs.hashSync(generatedPassword, 10);
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                            password: hashedpassword,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            } else if (account.provider === "google") {
                ConnectDB();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const generatedPassword =
                            Math.random().toString(36).slice(-8) +
                            Math.random().toString(36).slice(-8);
                        const hashedpassword = bcryptjs.hashSync(generatedPassword, 10);
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email,
                            img: profile.picture,
                            password: hashedpassword,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
    },
    ...authConfig.callbacks,
    secret: process.env.AUTH_SECRET,
});
