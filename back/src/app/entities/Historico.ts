import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chamado } from "./Chamado";

@Entity("historico")
export class Historico extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "acao" })
  acao: string;

  @CreateDateColumn({ type: "timestamp", name: "data" })
  data: Date;

  @Column({ name: "status" })
  status: number;

  @Column({ name: "id_chamado" })
  idChamado: number;

  @ManyToOne((type) => Chamado, (chamado) => chamado)
  @JoinColumn({ name: "id_chamado" })
  chamado: Chamado;
}
