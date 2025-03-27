import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./router";

const app = express();
const port = 4451;
app.use(cors()); // Permite para qualquer ip faça requisao na minha Api
app.use(express.json()); // Configura para que o server use o JSON //

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => console.log("Servidor Rodando!"));
