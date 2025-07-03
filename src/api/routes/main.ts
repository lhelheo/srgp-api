import { Router } from "express";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
