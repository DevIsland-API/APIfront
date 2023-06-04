import { ICreateTeamDTO } from "../../controllers/team/dto/CreateTeamDTO";
import { Grupo } from "../../entities/Grupo";
import { TeamRepository } from "../../repositories/TeamRepository";
import { TeamValidation } from "../../validations/TeamValidation";

export class CreateTeamService {
  static async execute(receivedTeam: ICreateTeamDTO): Promise<Grupo> {
    await TeamValidation.isGroupValid(receivedTeam.idGrupo);
    await TeamValidation.isOnCreateTeamNameValid(receivedTeam.nome);

    const createdTeam = await TeamRepository.create(receivedTeam);

    return createdTeam;
  }
}
