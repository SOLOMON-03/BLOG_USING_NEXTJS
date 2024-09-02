import mongoose from "mongoose";

const connection = {};

export const ConnectDB = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(err);
    });
};
