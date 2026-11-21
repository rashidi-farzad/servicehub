import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
  return token;
};
