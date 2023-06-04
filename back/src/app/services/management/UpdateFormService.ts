import { IUpdateFormDTO } from "../../controllers/management/dto/UpdateFormDTO";
import { Chamado } from "../../entities/Chamado";
import { FileRepository } from "../../repositories/FileRepository";
import { FormRepository } from "../../repositories/FormRepository";

export class UpdateFormService {
  static async execute(
    formId: number,
    receivedForm: IUpdateFormDTO
  ): Promise<Chamado> {
    const file = await FileRepository.update(formId, receivedForm.arquivo);
    const form = await FormRepository.update(formId, receivedForm);

    const updatedForm = Object.assign({}, form, { arquivo: file.arquivo });

    return updatedForm;
  }
}
