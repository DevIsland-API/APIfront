import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("grupo")
export class Grupo extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "nome" })
  nome: string;
}
