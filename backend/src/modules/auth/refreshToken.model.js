import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expired: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

schema.statics.createToken = async (user) => {
  const refreshToken = uuidv4();
  const refreshTokenDocument = new model({
    token: refreshToken,
    user: user._id,
    expired: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });
  await refreshTokenDocument.save();
  return refreshToken;
};
schema.statics.verifyToken = async (token) => {
  const refreshTokenDocument = await model.findOne({ token });
  if (refreshTokenDocument && refreshTokenDocument.expired >= Date.now()) {
    return refreshTokenDocument.user;
  } else {
    return null;
  }
};

const model = mongoose.model("RefreshToken", schema);
export default model;
