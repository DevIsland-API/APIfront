import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class ListFormService {
  static async execute(): Promise<Chamado[]> {
    const forms = await FormRepository.getAll();

    return forms;
  }
}
