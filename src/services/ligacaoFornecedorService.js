const db = require('../configs');

async function listarIngredientesFornecedor() {
  const result = await db.query('SELECT * FROM "L_INGREDIENTE_FORNECEDOR"');
  return result.rows;
}

async function BuscarIngredientesFornecedorPorId(id) {
  const result = await db.query('SELECT * FROM "L_INGREDIENTE_FORNECEDOR" WHERE "ID_LIGACAO" = $1', [id]);
  return result.rows[0];
}

async function criarLigacaoFornecedor(id_ingrediente, id_fornecedor,valor_unitario) {
  const result = await db.query(
    'INSERT INTO "L_INGREDIENTE_FORNECEDOR" ("ID_INGREDIENTE", "ID_FORNECEDOR", "VALOR_UNITARIO") VALUES ($1, $2, $3) RETURNING *',
    [id_ingrediente, id_fornecedor,valor_unitario]
  );
  return result.rows[0];
}

async function atualizarLigacaoFornecedor(id,id_ingrediente, id_fornecedor,valor_unitario) {
  const result = await db.query(
    'UPDATE "L_INGREDIENTE_FORNECEDOR" SET "ID_INGREDIENTE" = $1, "ID_FORNECEDOR" = $2, "VALOR_UNITARIO" = $3 WHERE "ID_LIGACAO" = $4 RETURNING *',
    [id_ingrediente, id_fornecedor,valor_unitario, id]
  );
  return result.rows[0];
}

async function deletarLigacaoFornecedor(id) {
  await db.query('DELETE FROM "L_INGREDIENTE_FORNECEDOR" WHERE "ID_LIGACAO" = $1', [id]);
}

module.exports = {
    listarIngredientesFornecedor,
    BuscarIngredientesFornecedorPorId,
    criarLigacaoFornecedor,
    atualizarLigacaoFornecedor,
    deletarLigacaoFornecedor
};
