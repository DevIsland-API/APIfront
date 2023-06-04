import { StatusCode } from "../shared/enum/StatusCode";
import { ApplicationError } from "../shared/error/ApplicationError";

export class GroupDoesNotExists extends ApplicationError {
  constructor(error: string) {
    super(StatusCode.NOT_FOUND, error, "GroupDoesNotExists");
  }
}
