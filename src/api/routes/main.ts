import { Router } from "express";

export const mainRouter = Router();

mainRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});
