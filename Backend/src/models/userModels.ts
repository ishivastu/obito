import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  avatar?: string; // optional since default exists
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true, // add index for faster lookup
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // index for faster queries
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const User= mongoose.model("User", UserSchema);

export default User;
