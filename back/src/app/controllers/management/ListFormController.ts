import { Request, Response } from "express";
import { ListFormService } from "../../services/management/ListFormService";
import { ApplicationError } from "../../shared/error/ApplicationError";

export class ListFormController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listForm = await ListFormService.execute();

      return response.status(200).send(listForm);
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
