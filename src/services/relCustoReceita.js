const db = require('../configs');

async function calcularCustoReceita(idReceita) {
  const query = `
    SELECT 
      r."NOME_RECEITA" AS nome_receita,
      i."NOME_INGREDIENTE" AS nome_ingrediente,
      lri."QUANTIDADE_INGREDIENTE" AS quantidade_ingrediente,
      lif_min.menor_preco,
      (lri."QUANTIDADE_INGREDIENTE" * lif_min.menor_preco) AS custo_parcial
    FROM "T_RECEITAS" r
    JOIN "L_RECEITAS_INGREDIENTES" lri ON r."ID_RECEITA" = lri."ID_RECEITA"
    JOIN "T_INGREDIENTES" i ON lri."ID_INGREDIENTE" = i."ID_INGREDIENTE"
    JOIN (
      SELECT "ID_INGREDIENTE", MIN("VALOR_UNITARIO") AS menor_preco
      FROM "L_INGREDIENTE_FORNECEDOR"
      GROUP BY "ID_INGREDIENTE"
    ) lif_min ON i."ID_INGREDIENTE" = lif_min."ID_INGREDIENTE"
    WHERE r."ID_RECEITA" = $1
  `;

  const result = await db.query(query, [idReceita]);
  return result.rows;
}

module.exports = {
  calcularCustoReceita
};
