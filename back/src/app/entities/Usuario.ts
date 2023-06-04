import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Time } from "./Time";

@Entity("usuario")
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "nome" })
  nome: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "senha" })
  senha: string;

  @Column({ name: "nivel_acesso" })
  nivelAcesso: number;

  @Column({ name: "id_time" })
  idTime: number;

  @ManyToOne((type) => Time, (time) => time)
  @JoinColumn({ name: "id_time" })
  time: Time;
}
