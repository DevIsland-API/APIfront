import { StatusCode } from "../shared/enum/StatusCode";
import { ApplicationError } from "../shared/error/ApplicationError";

export class GroupNameAlreadyTaken extends ApplicationError {
  constructor(error: string) {
    super(StatusCode.FORBIDDEN, error, "GroupNameAlreadyTaken");
  }
}
