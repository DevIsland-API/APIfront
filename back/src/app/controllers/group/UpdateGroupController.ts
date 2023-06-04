import { Request, Response } from "express";
import { UpdateGroupService } from "../../services/group/UpdateGroupService";

export class UpdateGroupController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const updatedGroup = await UpdateGroupService.execute(
        request.params.id as any,
        request.body
      );

      return response.status(200).send({
        message: "Grupo atualizado com sucesso!",
        created: updatedGroup,
      });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
