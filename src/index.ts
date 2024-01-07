import express from "express";
import routes from "./routes";
import serverConfig from "./config";
import { genericErrorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(routes);

app.use(genericErrorHandler);

console.log("listening on port:", serverConfig.serverPort);

app.listen(serverConfig.serverPort);
