import express from "express";
import fileUpload from "express-fileupload";
import routes from "./routes";
import serverConfig from "./config";
import cors from "cors";
import { genericErrorHandler } from "./middleware/errorHandler.middleware";

const app = express();

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(cors());

app.use(routes);

app.use(genericErrorHandler);

console.log("listening on port:", serverConfig.serverPort);

app.listen(serverConfig.serverPort);
