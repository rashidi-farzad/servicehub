import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
app.use(express.json());

//* Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`this path not found: ${req.path}`);
  error.status = 404;
  next(error);
});

//* global error Handler
app.use(errorHandler);

export default app;
