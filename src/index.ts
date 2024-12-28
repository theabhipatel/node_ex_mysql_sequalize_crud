import express from "express";
import { HOSTNAME, NODE_ENV, PORT } from "./config";
import { connectDb } from "./utils/connectDb";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome to home route in the ${NODE_ENV}.`,
  });
});

app.listen(Number(PORT), HOSTNAME, () => {
  console.log(
    `Server is running in ${NODE_ENV} mode at http://${HOSTNAME}:${PORT}`
  );
  connectDb();
});
