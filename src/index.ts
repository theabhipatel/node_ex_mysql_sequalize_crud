import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to home route." });
});

app.listen(3001, () => {
  console.log(`Server is running in Development mode at http://localhost:3001`);
});
