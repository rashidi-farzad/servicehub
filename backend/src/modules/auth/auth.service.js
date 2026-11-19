import userModel from "../users/user.model.js";

export const register = async (data) => {
  const existsUser = await userModel.findOne({
    $or: [{ email: data.email }, { phone: data.phone }],
  });

  if (existsUser) {
    const error = new Error("Email or Phone already exists");
    error.status = 409;
    throw error;
  }

  const user = await userModel.create({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    password: data.password,
    address: data.address,
  });

  const userObject = user.userObject();
  delete userObject.password;

  return userObject;
};
