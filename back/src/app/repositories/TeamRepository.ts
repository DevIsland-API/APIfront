import { ICreateTeamDTO } from "../controllers/team/dto/CreateTeamDTO";
import { IUpdateTeamDTO } from "../controllers/team/dto/UpdateTeamDTO";
import { Time } from "../entities/Time";
import { TeamDoesNotExists } from "../exceptions/TeamDoesNotExists";
import { ErrorMessages } from "../shared/error/ErrorMessages";
import { InternalServerError } from "../validations/InternalServerError";

export class TeamRepository {
  static async getAll(): Promise<Time[]> {
    try {
      const foundTeams = await Time.find();

      return foundTeams;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async internalFindById(teamId: number): Promise<Time> {
    try {
      const foundTeam = await Time.findOne({
        where: {
          id: teamId,
        },
      });

      if (!foundTeam) {
        return null;
      }

      return foundTeam;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async findByName(teamName: string): Promise<Time> {
    try {
      const foundTeam = await Time.findOne({
        where: {
          nome: teamName,
        },
      });

      if (!foundTeam) {
        return null;
      }

      return foundTeam;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async findByNameAndId(
    teamName: string,
    teamId: number
  ): Promise<Time> {
    try {
      const foundTeam = await Time.findOne({
        where: {
          nome: teamName,
          id: teamId,
        },
      });

      if (!foundTeam) {
        return null;
      }

      return foundTeam;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }
  static async create({ nome, idGrupo }: ICreateTeamDTO): Promise<Time> {
    try {
      return await Time.create({
        nome,
        idGrupo,
      }).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async update(teamId: number, team: IUpdateTeamDTO): Promise<Time> {
    try {
      const foundTeam = await this.internalFindById(teamId);
      if (!foundTeam) {
        throw new TeamDoesNotExists(ErrorMessages.TEAM_DOES_NOT_EXISTS);
      }

      await Time.update({ id: teamId }, team);
      return await this.internalFindById(teamId);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }
}
