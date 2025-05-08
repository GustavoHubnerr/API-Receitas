const db = require('../configs');

async function listarReceitasIngredientes() {
  const result = await db.query('SELECT * FROM "L_RECEITAS_INGREDIENTES"');
  return result.rows;
}

async function BuscarReceitasIngredientesPorId(id) {
  const result = await db.query('SELECT * FROM "L_RECEITAS_INGREDIENTES" WHERE "ID_LIGACAO" = $1', [id]);
  return result.rows[0];
}

async function criarLigacaoReceita(id_receita, id_ingrediente,quantidade) {
  const result = await db.query(
    'INSERT INTO "L_RECEITAS_INGREDIENTES" ("ID_RECEITA", "ID_INGREDIENTE", "QUANTIDADE_INGREDIENTE") VALUES ($1, $2, $3) RETURNING *',
    [id_receita, id_ingrediente,quantidade]
  );
  return result.rows[0];
}

async function atualizarLigacaoReceita(id, id_receita, id_ingrediente,quantidade) {
  const result = await db.query(
    'UPDATE "L_RECEITAS_INGREDIENTES" SET "ID_RECEITA" = $1, "ID_INGREDIENTE" = $2, "QUANTIDADE_INGREDIENTE" = $3 WHERE "ID_LIGACAO" = $4 RETURNING *',
    [id_receita, id_ingrediente,quantidade, id]
  );
  return result.rows[0];
}

async function deletarLigacaoReceita(id) {
  await db.query('DELETE FROM "L_RECEITAS_INGREDIENTES" WHERE "ID_LIGACAO" = $1', [id]);
}

module.exports = {
    listarReceitasIngredientes,
    BuscarReceitasIngredientesPorId,
    criarLigacaoReceita,
    atualizarLigacaoReceita,
    deletarLigacaoReceita
};
