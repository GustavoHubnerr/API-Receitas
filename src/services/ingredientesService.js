const db = require('../configs');

async function listarIngredientes() {
  const result = await db.query('SELECT * FROM "T_INGREDIENTES"');
  return result.rows;
}

async function buscarIngredientePorId(id) {
  const result = await db.query('SELECT * FROM "T_INGREDIENTES" WHERE "ID_INGREDIENTE" = $1', [id]);
  return result.rows[0];
}

async function criarIngrediente(nome, data, unidade) {
  const result = await db.query(
    'INSERT INTO "T_INGREDIENTES" ("NOME_INGREDIENTE", "DATA_CADASTRO", "UNIDADE_MEDIDA") VALUES ($1, $2, $3) RETURNING *',
    [nome, data, unidade]
  );
  return result.rows[0];
}

async function atualizarIngrediente(id, nome, data, unidade) {
  const result = await db.query(
    'UPDATE "T_INGREDIENTES" SET "NOME_INGREDIENTE" = $1, "DATA_CADASTRO" = $2, "UNIDADE_MEDIDA" = $3 WHERE "ID_INGREDIENTE" = $4 RETURNING *',
    [nome, data, unidade, id]
  );
  return result.rows[0];
}

async function deletarIngrediente(id) {
  await db.query('DELETE FROM "T_INGREDIENTES" WHERE "ID_INGREDIENTE" = $1', [id]);
}

module.exports = {
  listarIngredientes,
  buscarIngredientePorId,
  criarIngrediente,
  atualizarIngrediente,
  deletarIngrediente
};
