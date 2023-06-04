import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class DeleteFormService {
  static async execute(formId: number): Promise<Chamado> {
    return await FormRepository.deactivate(formId);
  }
}
