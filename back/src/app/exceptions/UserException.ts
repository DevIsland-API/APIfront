import Exception from "./Exception";

export class UserException extends Exception {
  static readonly PASSWORD_PASSWORD_CONFIRMATION_DONT_MATCH =
    "Senhas divergentes.";
  static readonly INVALID_EMAIL = "Favor inserir um e-mail válido";
}
