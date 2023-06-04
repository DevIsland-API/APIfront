import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chamado } from "./Chamado";
import { Usuario } from "./Usuario";

@Entity("usuario_interessado")
export class UsuarioInteressado extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "id_chamado" })
  idChamado: number;

  @Column({ name: "interessado" })
  interessado: number;

  @ManyToOne((type) => Chamado, (chamado) => chamado)
  @JoinColumn({ name: "id_chamado" })
  chamado: Chamado;

  @ManyToOne((type) => Usuario, (Usuario) => Usuario)
  @JoinColumn({ name: "id_usuario" })
  Usuario: Usuario;
}
