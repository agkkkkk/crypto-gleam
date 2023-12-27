require("dotenv").config();

const express = require("express");
const Database = require("./config/database");

const app = express();

const port = 5000;

const db = new Database(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.connect().catch((err) => {
  console.log(err);
});

process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
});

app.listen(port, console.log(`SERVER listening to port ${port}`));
