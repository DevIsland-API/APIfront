import { GroupDoesNotExists } from "../exceptions/GroupDoesNotExists";
import { TeamNameAlreadyTaken } from "../exceptions/TeamNameAlreadyTaken";
import { GroupRepository } from "../repositories/GroupRepository";
import { TeamRepository } from "../repositories/TeamRepository";
import { ErrorMessages } from "../shared/error/ErrorMessages";

export class TeamValidation {
  static async isGroupValid(idGrupo: number) {
    const foundGroup = await GroupRepository.internalFindById(idGrupo);
    if (!foundGroup) {
      throw new GroupDoesNotExists(ErrorMessages.GROUP_DOES_NOT_EXISTS);
    }
  }

  static async isOnCreateTeamNameValid(name: string) {
    const foundTeam = await TeamRepository.findByName(name);
    if (foundTeam) {
      throw new TeamNameAlreadyTaken(ErrorMessages.TEAM_NAME_ALREADY_TAKEN);
    }
  }

  static async isOnUpdateGroupNameValid(name: string, groupId: number) {
    const foundTeam = await TeamRepository.findByNameAndId(name, groupId);
    if (foundTeam) {
      throw new TeamNameAlreadyTaken(ErrorMessages.TEAM_NAME_ALREADY_TAKEN);
    }
  }
}
