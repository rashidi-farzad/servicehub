import mongoose from "mongoose";
import argon2 from "argon2";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profilePicture: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true },
);

schema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await argon2.hash(this.password);
});

const userModel = mongoose.model("User", schema);
export default userModel;
