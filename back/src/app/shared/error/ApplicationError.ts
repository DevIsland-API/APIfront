import { StatusCode } from "../enum/StatusCode";
export class ApplicationError extends Error {
  constructor(
    readonly statusCode: StatusCode,
    readonly message: string,
    readonly name: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}
