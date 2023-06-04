import validator from "validator";
import { EmailAlreadyInUse } from "../exceptions/EmailAlreadyInUse";
import { InvalidEmail } from "../exceptions/InvalidEmail";
import { PasswordConfirmationDoesNotMatch } from "../exceptions/PasswordConfirmationDoesNotMatch";
import { UserRepository } from "../repositories/UserRepository";
import { ErrorMessages } from "../shared/error/ErrorMessages";

export class UserValidation {
  static isPasswordsEqual(password: string, passwordConfirmation: string) {
    if (password !== passwordConfirmation) {
      throw new PasswordConfirmationDoesNotMatch(
        ErrorMessages.PASSWORD_PASSWORD_CONFIRMATION_DONT_MATCH
      );
    }
  }

  static isEmailValid(email: string) {
    const isValid = validator.isEmail(email);
    if (!isValid) {
      throw new InvalidEmail(ErrorMessages.INVALID_EMAIL);
    }
  }

  static async isEmailAlreadyTaken(email: string) {
    const isEmailUsed = await UserRepository.findByEmail(email);
    if (isEmailUsed) {
      throw new EmailAlreadyInUse(ErrorMessages.EMAIL_ALREADY_TAKEN);
    }
  }
}
