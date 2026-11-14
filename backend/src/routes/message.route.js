import express from "express";

const messageRouter = express.Router();

messageRouter.get("/", (req, res) => {
  res.send("<h1> Let's Message </h1>");
});

export { messageRouter };
