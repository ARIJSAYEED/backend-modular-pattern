import "dotenv/config";
import app from "./app.js";
import { connectToMongoDB } from "./config/db.js";

const port = process.env.PORT || 3000;

async function startServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

startServer();
