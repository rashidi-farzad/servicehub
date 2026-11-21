import * as authService from "./auth.service.js";
import { successResponse } from "../../utils/responses.js";

export const register = async (req, res) => {
  const { user, accessToken } = await authService.register(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return successResponse(res, 201, user);
};
