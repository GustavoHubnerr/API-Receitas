const db = require('../configs');

async function listarFornecedores() {
  const result = await db.query('SELECT * FROM "T_FORNECEDORES"');
  return result.rows;
}

async function buscarFornecedorPorId(id) {
  const result = await db.query('SELECT * FROM "T_FORNECEDORES" WHERE "ID_FORNECEDOR" = $1', [id]);
  return result.rows[0];
}

async function CadastrarFornecedor(nome, cnpj, email, contato, endereco) {
  const result = await db.query(
    `INSERT INTO "T_FORNECEDORES" 
    ("NOME_FORNECEDOR","CNPJ","EMAIL_FORNECEDOR","CONTATO_FORNECEDOR","ENDERECO") 
    VALUES ($1, $2,$3,$4,$5) RETURNING *`,
    [nome, cnpj, email, contato, endereco]
  );
  return result.rows[0];
}

async function atualizarFornecedor(id, nome, cnpj, email, contato, endereco) {
  const result = await db.query(
    `UPDATE "T_FORNECEDORES" 
    SET 
    "NOME_FORNECEDOR" = $1, 
    "CNPJ" = $2, 
    "EMAIL_FORNECEDOR" = $3,
    "CONTATO_FORNECEDOR" = $4,
    "ENDERECO" = $5
     WHERE "ID_FORNECEDOR" = $6 RETURNING *`,
    [nome, cnpj, email, contato, endereco, id]
  );
  return result.rows[0];
}

async function deletarFornecedor(id) {
  await db.query('DELETE FROM "T_FORNECEDORES" WHERE "ID_FORNECEDOR" = $1', [id]);
}

module.exports = {
    listarFornecedores,
    buscarFornecedorPorId,
    CadastrarFornecedor,
    atualizarFornecedor,
    deletarFornecedor
};
