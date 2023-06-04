import { IUpdateGroupDTO } from "../../controllers/group/dto/UpdateGroupDTO";
import { Grupo } from "../../entities/Grupo";
import { GroupRepository } from "../../repositories/GroupRepository";
import { GroupValidation } from "../../validations/GroupValidation";

export class UpdateGroupService {
  static async execute(
    groupId: number,
    group: IUpdateGroupDTO
  ): Promise<Grupo> {
    await GroupValidation.isOnCreateGroupNameValid(group.nome);

    const updatedGroup = await GroupRepository.update(groupId, group);

    return updatedGroup;
  }
}
