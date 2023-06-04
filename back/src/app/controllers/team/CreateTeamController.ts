import { Request, Response } from "express";
import { CreateTeamService } from "../../services/team/CreateTeamService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { ICreateTeamDTO } from "./dto/CreateTeamDTO";

export class CreateTeamController {
  static async handle(
    request: Request<ICreateTeamDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const team = request.body as ICreateTeamDTO;

      const createdTeam = await CreateTeamService.execute(team);

      return response
        .status(200)
        .send({ message: "Time criado com sucesso!", created: createdTeam });
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
