import dotenv from "dotenv";

if (process.env.ENV_NODE !== "production") {
  dotenv.config();
}
