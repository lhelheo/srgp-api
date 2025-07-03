import express from "express";
import cors from "cors";
import projectRoutes from "./api/routes/projectRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", projectRoutes);

app.get("/test", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Test endpoint is working!",
    });
});

export default app;
