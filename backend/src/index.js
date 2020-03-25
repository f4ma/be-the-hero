// Importar o modulo "Express" para a variavel de mesmo nome
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
//Variavel para armazenar a aplicação
const app = express();
//Modulo de segurança Cors
app.use(cors());
//Converter Json em objeto do JavaScript
app.use(express.json());
app.use(routes);

/*
Rota / Recurso
*/
/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

//Subir servidor na porta expecificada
app.listen(3333);
