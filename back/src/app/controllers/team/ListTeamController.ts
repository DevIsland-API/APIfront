import { Request, Response } from "express";
import { ListTeamService } from "../../services/team/ListTeamService";
import { ApplicationError } from "../../shared/error/ApplicationError";

export class ListTeamController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listTeam = await ListTeamService.execute();

      return response.status(200).send(listTeam);
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
