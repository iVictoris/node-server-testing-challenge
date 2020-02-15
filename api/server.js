const express = require("express");
const app = express();

const { router: userRouter } = require("../router/userRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});
module.exports = app;
