// services/categorias.js
const db = require('../configs');

async function listarCategorias() {
  const result = await db.query('SELECT * FROM "T_CATEGORIA"');
  return result.rows;
}

async function buscarCategoriaPorId(id) {
  const result = await db.query('SELECT * FROM "T_CATEGORIA" WHERE "ID_CATEGORIA" = $1', [id]);
  return result.rows[0];
}

async function criarCategoria(nome) {
  const result = await db.query(
    'INSERT INTO "T_CATEGORIA" ("NOME_CATEGORIA") VALUES ($1) RETURNING *',
    [nome]
  );
  return result.rows[0];
}

async function atualizarCategoria(id, nome) {
  const result = await db.query(
    'UPDATE "T_CATEGORIA" SET "NOME_CATEGORIA" = $1 WHERE "ID_CATEGORIA" = $2 RETURNING *',
    [nome, id]
  );
  return result.rows[0];
}

async function deletarCategoria(id) {
  await db.query('DELETE FROM "T_CATEGORIA" WHERE "ID_CATEGORIA" = $1', [id]);
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
  deletarCategoria
};
