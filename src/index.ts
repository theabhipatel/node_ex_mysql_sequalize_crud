import express from "express";
import { HOSTNAME, NODE_ENV, PORT } from "./config";
import { connectDb } from "./utils/connectDb";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

/** ---> Registering middlewares. */
app.use(express.json());
app.use(express.urlencoded());

/** ---> Handling home route. */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome to home route in the ${NODE_ENV}.`,
  });
});

/** ---> Handling all api routes. */
app.use("/api/v1", router);

/** ---> Handling 404 not fount route. */
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found.`,
  });
});

/** ---> Handling errors globally. */
app.use(errorHandler);

/** ---> Listening application. */
app.listen(Number(PORT), HOSTNAME, () => {
  console.log(
    `Server is running in ${NODE_ENV} mode at http://${HOSTNAME}:${PORT}`
  );
  connectDb();
});
