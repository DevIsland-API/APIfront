import { IUpdateTeamDTO } from "../../controllers/team/dto/UpdateTeamDTO";
import { Grupo } from "../../entities/Grupo";
import { TeamRepository } from "../../repositories/TeamRepository";
import { TeamValidation } from "../../validations/TeamValidation";

export class UpdateTeamService {
  static async execute(
    teamId: number,
    receivedTeam: IUpdateTeamDTO
  ): Promise<Grupo> {
    await TeamValidation.isOnUpdateGroupNameValid(
      receivedTeam.nome,
      receivedTeam.idGrupo
    );
    await TeamValidation.isGroupValid(receivedTeam.idGrupo);
    const group = await TeamRepository.update(teamId, receivedTeam);

    return group;
  }
}
