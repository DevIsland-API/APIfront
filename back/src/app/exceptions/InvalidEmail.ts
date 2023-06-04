import { StatusCode } from "../shared/enum/StatusCode";
import { ApplicationError } from "../shared/error/ApplicationError";

export class InvalidEmail extends ApplicationError {
  constructor(error: string) {
    super(StatusCode.BAD_REQUEST, error, "InvalidEmail");
  }
}
