import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createChamadoTable1681824964942 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "chamado",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "titulo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descricao",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "int",
            isNullable: false,
          },
          {
            name: "status",
            type: "int",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("chamado");
  }
}
