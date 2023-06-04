import { Request, Response } from "express";
import { ListGroupService } from "../../services/group/ListGroupService";
import { ApplicationError } from "../../shared/error/ApplicationError";

export class ListGroupController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log("bati aqui");
      const listGroup = await ListGroupService.execute();

      return response.status(200).send(listGroup);
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
