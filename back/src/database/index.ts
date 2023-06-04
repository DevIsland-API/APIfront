import { ConnectionOptions, createConnection } from "typeorm";

import config from "../../ormconfig";

if (process.env.NODE_ENV !== "test") {
  createConnection(config as ConnectionOptions)
    .then(() => {
      console.log("Banco de dados conectado.");
    })
    .catch((e) => {
      console.log(e);
      console.log("Erro na conexão com o banco de dados.");
    });
}
