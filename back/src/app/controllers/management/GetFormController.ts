import { Request, Response } from "express";
import { GetFormService } from "../../services/management/GetFormService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { IGetFormDTO } from "./dto/GetFormDTO";

export class GetFormController {
  static async handle(
    request: Request<IGetFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const getForm = await GetFormService.execute(request.params.id);

      return response.status(200).send(getForm);
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
