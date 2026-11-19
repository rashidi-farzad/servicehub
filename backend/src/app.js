import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import corsConfig from "./config/cors.js";
import authRoute from "./modules/auth/auth.route.js";
const app = express();

//* CORS Configuration
app.use(corsConfig);

//* body parsing config
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

//! routes
app.use("/auth", authRoute);

//* Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`this path not found: ${req.path}`);
  error.status = 404;
  next(error);
});

//* global error Handler
app.use(errorHandler);

export default app;
