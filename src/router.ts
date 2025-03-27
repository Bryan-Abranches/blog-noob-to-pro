import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

/* Rotas User */
router.post("/user", new CreateUserController().handle);

export { router };
