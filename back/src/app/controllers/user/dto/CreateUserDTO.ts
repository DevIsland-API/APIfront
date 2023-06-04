export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  nivelAcesso?: number;
  idTime: number;
}
