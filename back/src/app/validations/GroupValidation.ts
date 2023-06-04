import { GroupNameAlreadyTaken } from "../exceptions/GroupNameAlreadyTaken";
import { GroupRepository } from "../repositories/GroupRepository";
import { ErrorMessages } from "../shared/error/ErrorMessages";

export class GroupValidation {
  static async isOnCreateGroupNameValid(name: string) {
    const foundGroup = await GroupRepository.findByName(name);
    if (foundGroup) {
      throw new GroupNameAlreadyTaken(ErrorMessages.GROUP_NAME_ALREADY_TAKEN);
    }
  }

  static async isOnUpdateGroupNameValid(name: string, groupId: number) {
    const foundGroup = await GroupRepository.findByNameAndId(name, groupId);
    if (foundGroup) {
      throw new GroupNameAlreadyTaken(ErrorMessages.GROUP_NAME_ALREADY_TAKEN);
    }
  }
}
