export default class Exception {
  public mensagem: string;

  public errorCode: number;

  public errorInfo?: unknown;

  constructor(mensagem: string, errorCode = 500, errorInfo?: unknown) {
    this.mensagem = mensagem;
    this.errorCode = errorCode;
    this.errorInfo = errorInfo;
  }
}
