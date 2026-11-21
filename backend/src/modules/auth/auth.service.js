import userModel from "../users/user.model.js";
import refreshTokenModel from "./refreshToken.model.js";
import { generateAccessToken } from "../../utils/generateToken.js";

export const register = async (data) => {
  const { fullName, email, phone, password, confirmPassword } = data;
  const existsUser = await userModel.findOne({
    $or: [{ email }, { phone }],
  });

  if (existsUser) {
    const error = new Error("Email or Phone already exists");
    error.status = 409;
    throw error;
  }

  const user = await userModel.create({
    fullName,
    email,
    phone,
    password,
    confirmPassword,
  });

  const userObject = user.toObject();
  delete userObject.password;

  const accessToken = generateAccessToken(user._id);
  const refreshToken = refreshTokenModel.createToken(user);

  return {
    user: userObject,
    accessToken,
    refreshToken,
  };
};
