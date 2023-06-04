import { Request, Response } from "express";
import { CreateFormService } from "../../services/management/CreateFormService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { ICreateFormDTO } from "./dto/CreateFormDTO";

export class CreateFormController {
  static async handle(
    request: Request<ICreateFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const form = request.body as ICreateFormDTO;

      const createdForm = await CreateFormService.execute(form);

      return response
        .status(200)
        .send({ message: "Chamado criado com sucesso!", created: createdForm });
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
