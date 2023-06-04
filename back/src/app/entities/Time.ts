import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Grupo } from "./Grupo";

@Entity("time")
export class Time extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "nome" })
  nome: string;

  @Column({ name: "id_grupo" })
  idGrupo: number;

  @ManyToOne((type) => Grupo, (grupo) => grupo)
  @JoinColumn({ name: "id_grupo" })
  grupo: Grupo;
}
