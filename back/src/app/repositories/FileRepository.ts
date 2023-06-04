import { ArquivoMidia } from "../entities/ArquivoMidia";
import { ErrorMessages } from "../shared/error/ErrorMessages";
import { InternalServerError } from "../validations/InternalServerError";

export class FileRepository {
  static async getAllByForm(formId: number): Promise<ArquivoMidia[]> {
    try {
      const foundFile = await ArquivoMidia.find({
        where: {
          idChamado: formId,
        },
      });

      return foundFile;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async getOneByForm(formId: number): Promise<ArquivoMidia> {
    try {
      const foundFile = await ArquivoMidia.findOne({
        where: {
          idChamado: formId,
        },
      });

      return foundFile;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async create(formId: number, fileName: string): Promise<ArquivoMidia> {
    try {
      return await ArquivoMidia.create({
        arquivo: fileName,
        idChamado: formId,
      }).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }

  static async update(formId: number, fileName: string): Promise<ArquivoMidia> {
    try {
      await ArquivoMidia.update({ idChamado: formId }, { arquivo: fileName });
      return await this.getOneByForm(formId);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(ErrorMessages.DB_ERROR + error);
    }
  }
}
