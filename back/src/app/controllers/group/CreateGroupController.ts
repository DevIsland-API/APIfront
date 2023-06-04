import { Request, Response } from "express";
import { CreateGroupService } from "../../services/group/CreateGroupService";
import { ICreateGroupDTO } from "./dto/CreateGroupDTO";

export class CreateGroupController {
  static async handle(
    request: Request<ICreateGroupDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const group = request.body as ICreateGroupDTO;

      const createdGroup = await CreateGroupService.execute(group);

      return response
        .status(200)
        .send({ message: "Grupo criado com sucesso!", created: createdGroup });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
