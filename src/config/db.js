import mongoose from "mongoose";

const connectdb = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connect successfully");

  } catch (error) {

    console.log("DB connection failed", error);
  }
};
export default connectdb