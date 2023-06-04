import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chamado } from "./Chamado";

@Entity("arquivo_midia")
export class ArquivoMidia extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "arquivo" })
  arquivo: string;

  @Column({ name: "id_chamado" })
  idChamado: number;

  @ManyToOne((type) => Chamado, (chamado) => chamado)
  @JoinColumn({ name: "id_chamado" })
  chamado: Chamado;
}
