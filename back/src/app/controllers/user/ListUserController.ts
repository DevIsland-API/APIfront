import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";
import { ApplicationError } from "../../shared/error/ApplicationError";

export class ListUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUser = await ListUserService.execute();

      return response.status(200).send(listUser);
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
