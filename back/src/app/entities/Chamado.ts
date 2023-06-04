import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Entity("chamado")
export class Chamado extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "titulo" })
  titulo: string;

  @Column({ name: "descricao" })
  descricao: string;

  @Column({ name: "tipo" })
  tipo: number;

  @Column({ name: "status" })
  status: number;

  @Column({ name: "usuario_requisitor" })
  usuarioRequisitador: number;

  @ManyToOne((type) => Usuario, (usuario) => usuario)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario;
}
