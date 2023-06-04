import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { ICreateUserDTO } from "./dto/CreateUserDTO";

export class CreateUserController {
  static async handle(
    request: Request<ICreateUserDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const userToCreate = request.body as ICreateUserDTO;
      const userCreated = await CreateUserService.execute(userToCreate);
      delete userCreated.senha;

      return response
        .status(200)
        .send({ message: "Usuário criado com sucesso!", created: userCreated });
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
