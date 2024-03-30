import mongoose from "mongoose";

const connection ={};

export const ConnectDB = async() =>{
    try {
        if(connection.isConnected){
            console.log("using existing connection");
            return;
        }
        const db= await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0];
    } catch (error) {
        throw new Error(error);
    }
} 