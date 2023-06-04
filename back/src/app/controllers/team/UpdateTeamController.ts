import { Request, Response } from "express";
import { UpdateTeamService } from "../../services/team/UpdateTeamService";
import { ApplicationError } from "../../shared/error/ApplicationError";
import { IUpdateTeamDTO } from "./dto/UpdateTeamDTO";

export class UpdateTeamController {
  static async handle(
    request: Request<IUpdateTeamDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const updatedTeam = await UpdateTeamService.execute(
        request.params.id,
        request.body as IUpdateTeamDTO
      );

      return response.status(200).send({
        message: "Time atualizado com sucesso!",
        created: updatedTeam,
      });
    } catch (error) {
      console.log("error -->", error);
      if (error instanceof ApplicationError) {
        return response.status(error.statusCode).send(error.message);
      }
    }
  }
}
