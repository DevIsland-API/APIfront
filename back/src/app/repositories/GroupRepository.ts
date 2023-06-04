import { ICreateGroupDTO } from "../controllers/group/dto/CreateGroupDTO";
import { IUpdateGroupDTO } from "../controllers/group/dto/UpdateGroupDTO";
import { Grupo } from "../entities/Grupo";
import { GroupDoesNotExists } from "../exceptions/GroupDoesNotExists";
import { ErrorMessages } from "../shared/error/ErrorMessages";
import { InternalServerError } from "../validations/InternalServerError";

export class GroupRepository {
  static async getAll(): Promise<Grupo[]> {
    try {
      const foundTeams = await Grupo.find();

      return foundTeams;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async internalFindById(groupId: number): Promise<Grupo> {
    try {
      const foundGroup = await Grupo.findOne({
        where: {
          id: groupId,
        },
      });

      if (!foundGroup) {
        return null;
      }

      return foundGroup;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async findByName(groupName: string): Promise<Grupo> {
    try {
      const foundGroup = await Grupo.findOne({
        where: {
          nome: groupName,
        },
      });

      if (!foundGroup) {
        return null;
      }

      return foundGroup;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async findByNameAndId(
    groupName: string,
    groupId: number
  ): Promise<Grupo> {
    try {
      const foundGroup = await Grupo.findOne({
        where: {
          nome: groupName,
          id: groupId,
        },
      });

      if (!foundGroup) {
        return null;
      }

      return foundGroup;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async create({ name }: ICreateGroupDTO): Promise<Grupo> {
    try {
      return await Grupo.create({
        nome: name,
      }).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async update(groupId: number, name: IUpdateGroupDTO): Promise<Grupo> {
    try {
      const foundGroup = await this.internalFindById(groupId);
      if (!foundGroup) {
        throw new GroupDoesNotExists(ErrorMessages.GROUP_DOES_NOT_EXISTS);
      }

      await Grupo.update({ id: groupId }, name);
      return await this.internalFindById(groupId);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }
}
