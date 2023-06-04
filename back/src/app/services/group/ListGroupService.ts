import { Grupo } from "@/app/entities/Grupo";
import { GroupRepository } from "../../repositories/GroupRepository";

export class ListGroupService {
  static async execute(): Promise<Grupo[]> {
    const groups = await GroupRepository.getAll();

    return groups;
  }
}
