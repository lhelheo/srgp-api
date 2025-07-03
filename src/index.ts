import express, {
  urlencoded,
} from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import { mainRouter } from "./api/routes/main";

const server = express();
server.use(helmet());
server.use(cors());
server.use(
  urlencoded({ extended: true })
);
server.disable("x-powered-by");
server.use(express.json());

server.use(mainRouter);

export default server;
