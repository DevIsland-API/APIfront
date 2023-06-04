import { ICreateUserDTO } from "../controllers/user/dto/CreateUserDTO";
import { Usuario } from "../entities/Usuario";
import { ErrorMessages } from "../shared/error/ErrorMessages";
import { InternalServerError } from "../validations/InternalServerError";

export class UserRepository {
  static async getAll(): Promise<Usuario[]> {
    try {
      const foundUsers = await Usuario.find({
        select: ["id", "email", "nivelAcesso", "idTime"],
      });

      return foundUsers;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async create({
    name,
    email,
    password,
    nivelAcesso,
    idTime,
  }: ICreateUserDTO): Promise<Usuario> {
    try {
      return await Usuario.create({
        nome: name,
        email,
        senha: password,
        nivelAcesso,
        idTime,
      }).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async findByEmail(email: string): Promise<Usuario> {
    try {
      const foundUser = await Usuario.findOne({
        email,
      });

      if (!foundUser) {
        return null;
      }
      return foundUser;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }
}
