import { Router } from "express";

import { deleteUser, getById } from "../controller/users.controller";
// import { validateReqBody, validateReqQuery } from "../middleware/validator";
// import { updateUserSchema } from "../schema/user";

const router = Router();

router.get("/", getById);

router.delete("/:id", deleteUser);

export default router;
