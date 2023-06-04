import { StatusCode } from "../shared/enum/StatusCode";
import { ApplicationError } from "../shared/error/ApplicationError";

export class EmailAlreadyInUse extends ApplicationError {
  constructor(error: string) {
    super(StatusCode.BAD_REQUEST, error, "EmailAlreadyInUse");
  }
}
