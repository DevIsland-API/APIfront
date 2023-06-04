import { getConnection } from "typeorm";

export const verifyEntitiesInDatabase = async (): Promise<void> => {
  const initConnection = await getConnection();
  const entitiesInDatabase = initConnection.entityMetadatas.map(
    (entity) => entity.tableName
  );

  entitiesInDatabase.forEach((entity) => {
    initConnection.query(`SELECT * FROM ${entity} LIMIT 1`).catch((e) => {
      console.info(`Tabela ${entity} não encontrada no banco de dados.`);
      console.info("Encerrando aplicação...");
      process.exit(1);
    });

    console.info(`Tabela ${entity} encontrada no banco de dados.`);
  });
};
