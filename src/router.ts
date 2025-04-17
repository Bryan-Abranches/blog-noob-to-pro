import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

/* Rotas User */
router.post("/user", new CreateUserController().handle);
router.get("/login", new AuthUserController().handle);

export { router };
