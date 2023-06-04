import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class ReactivateFormService {
  static async execute(formId: number): Promise<Chamado> {
    return await FormRepository.reactivate(formId);
  }
}
