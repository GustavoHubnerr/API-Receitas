const db = require('../configs');

async function listarReceitas() {
  const result = await db.query('SELECT * FROM "T_RECEITAS"');
  return result.rows;
}

async function buscarReceitaPorId(id) {
  const result = await db.query('SELECT * FROM "T_RECEITAS" WHERE "ID_RECEITA" = $1', [id]);
  return result.rows[0];
}

async function CadastrarReceita(nome_receita, modo_preparo,tempo_preparo, porcoes,id_categoria) {
  const result = await db.query(
    `INSERT INTO "T_RECEITAS" 
    ("NOME_RECEITA","MODO_PREPARO","TEMPO_PREPARO","PORCOES","ID_CATEGORIA") 
    VALUES ($1, $2,$3,$4,$5) RETURNING *`,
    [nome_receita, modo_preparo,tempo_preparo, porcoes,id_categoria]
  );
  return result.rows[0];
}

async function atualizarReceita(id, nome_receita, modo_preparo,tempo_preparo, porcoes,id_categoria) {
  const result = await db.query(
    `UPDATE "T_RECEITAS" 
    SET 
    "NOME_RECEITA" = $1, 
    "MODO_PREPARO" = $2, 
    "TEMPO_PREPARO" = $3,
    "PORCOES" = $4,
    "ID_CATEGORIA" = $5
     WHERE "ID_RECEITA" = $6 RETURNING *`,
    [nome_receita, modo_preparo,tempo_preparo, porcoes,id_categoria, id]
  );
  return result.rows[0];
}

async function deletarReceita(id) {
  await db.query('DELETE FROM "T_RECEITAS" WHERE "ID_RECEITA" = $1', [id]);
}

module.exports = {
    listarReceitas,
    buscarReceitaPorId,
    CadastrarReceita,
    atualizarReceita,
    deletarReceita
};
