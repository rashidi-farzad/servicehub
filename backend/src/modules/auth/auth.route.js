import express from "express";
import * as controller from "./auth.controller.js";
import validate from "../../middlewares/validate.js";
import { registerValidation } from "./auth.validation.js";
const router = express.Router();

router.post("/register", validate(registerValidation), controller.register);

export default router;
