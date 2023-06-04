import { ICreateGroupDTO } from "../../controllers/group/dto/CreateGroupDTO";
import { Grupo } from "../../entities/Grupo";
import { GroupRepository } from "../../repositories/GroupRepository";
import { GroupValidation } from "../../validations/GroupValidation";

export class CreateGroupService {
  static async execute(receivedGroup: ICreateGroupDTO): Promise<Grupo> {
    await GroupValidation.isOnCreateGroupNameValid(receivedGroup.name);
    const group = await GroupRepository.create(receivedGroup);

    return group;
  }
}
