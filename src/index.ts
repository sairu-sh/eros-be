import express from "express";
import routes from "./routes";
import serverConfig from "./config";
import cors from "cors";
import { genericErrorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(genericErrorHandler);

console.log("listening on port:", serverConfig.serverPort);

app.listen(serverConfig.serverPort);
