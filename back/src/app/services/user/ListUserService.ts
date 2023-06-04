import { Usuario } from "@/app/entities/Usuario";
import { UserRepository } from "../../repositories/UserRepository";

export class ListUserService {
  static async execute(): Promise<Usuario[]> {
    const users = await UserRepository.getAll();

    return users;
  }
}
