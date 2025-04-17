import prismaCliente from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email incorreto");
    }

    const userAlreadyExiste = await prismaCliente.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExiste) {
      throw new Error("Email ja cadastrado");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaCliente.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
