import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class GetFormService {
  static async execute(formId: number): Promise<Chamado> {
    const form = await FormRepository.getOne(formId);

    return form;
  }
}
