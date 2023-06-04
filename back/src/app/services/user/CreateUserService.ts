import bcrypt from "bcrypt";
import { ICreateUserDTO } from "../../controllers/user/dto/CreateUserDTO";
import { Usuario } from "../../entities/Usuario";
import { UserRepository } from "../../repositories/UserRepository";
import { UserValidation } from "../../validations/UserValidation";

export class CreateUserService {
  static async execute({
    name,
    email,
    password,
    passwordConfirmation,
    nivelAcesso,
    idTime,
  }: ICreateUserDTO): Promise<Usuario> {
    // Validações
    UserValidation.isPasswordsEqual(password, passwordConfirmation);
    UserValidation.isEmailValid(email);
    await UserValidation.isEmailAlreadyTaken(email);

    const userData = {
      name,
      email,
      password,
      passwordConfirmation,
      nivelAcesso,
      idTime,
    };
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await UserRepository.create(
      Object.assign({}, userData, { password: hashPassword })
    );

    return user;
  }
}
