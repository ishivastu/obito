import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    console.log(`☢️ DB connected successfully ☢️`);
  } catch (error) {
    console.log(`Error while connecting error : ${error}`);
    process.exit(1);
  }
};

export default dbConnect;
