import { Time } from "@/app/entities/Time";
import { TeamRepository } from "../../repositories/TeamRepository";

export class ListTeamService {
  static async execute(): Promise<Time[]> {
    const teams = await TeamRepository.getAll();

    return teams;
  }
}
