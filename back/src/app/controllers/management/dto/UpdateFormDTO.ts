export interface IUpdateFormDTO {
  id: number;
  titulo: string;
  descricao: string;
  tipo: number;
  status: number;
  usuarioRequisitador: number;
  arquivo: string;
}
