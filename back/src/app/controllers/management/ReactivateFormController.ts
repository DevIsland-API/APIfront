import { Request, Response } from "express";
import { ReactivateFormService } from "../../services/management/ReactivateFormService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { IReactivateFormDTO } from "./dto/ReactivateFormDTO";

export class ReactivateFormController {
  static async handle(
    request: Request<IReactivateFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const deletedForm = await ReactivateFormService.execute(
        request.params.id
      );

      return response.status(200).send({
        message: "Chamado desativado com sucesso!",
        created: deletedForm,
      });
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
