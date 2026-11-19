import "./config/env.js";
import connectDB from "./config/db.js";
import app from "./app.js";
const port = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () =>
    console.log(
      `server run ${process.env.ENV_NODE || "development"} mode on port ${port}`,
    ),
  );
};

await startServer();
