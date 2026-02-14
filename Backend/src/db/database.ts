import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not set");
    }
    await mongoose.connect(uri);
    console.log(`☢️ DB connected successfully ☢️`);
  } catch (error) {
    console.error(`Error while connecting : ${error}`);
    process.exit(1);
  }
};

export default dbConnect;
