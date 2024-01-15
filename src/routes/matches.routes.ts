import Router from "express";
import * as matchController from "../controller/match.controller";

const router = Router();

router.post("/", matchController.createMatch);

router.get("/", matchController.getMatches);

router.delete("/", matchController.deleteMatch);

export default router;
