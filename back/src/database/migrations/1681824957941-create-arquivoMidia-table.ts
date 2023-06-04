import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createArquivoMidiaTable1681824957941
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "arquivo_midia",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "arquivo",
            type: "varchar",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("arquivo_midia");
  }
}
