import Router from "express";
import * as matchRequestController from "../controller/match-request.controller";

const router = Router();

router.post("/", matchRequestController.sendRequest);

router.delete("/", matchRequestController.deleteRequest);

export default router;
