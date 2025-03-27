import { json, Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserController = new CreateUserService();
    const user = await createUserController.execute();

    return res.json(user);
  }
}

export { CreateUserController };
