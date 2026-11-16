import "dotenv/config";
import connectDB from "./config/db.js";
import app from "./app.js";
const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB();

  app.listen(port, () => console.log(`server run on port ${port}`));
};

await start();
