const db = require('../configs');

async function ingredientesMaisUsados() {
  const query = `
    SELECT 
      i."NOME_INGREDIENTE",
      SUM(lri."QUANTIDADE_INGREDIENTE") AS total_usado
    FROM "L_RECEITAS_INGREDIENTES" lri
    JOIN "T_INGREDIENTES" i ON lri."ID_INGREDIENTE" = i."ID_INGREDIENTE"
    GROUP BY i."NOME_INGREDIENTE"
    ORDER BY total_usado DESC;
  `;

  const { rows } = await db.query(query);
  return rows;
}

module.exports = { ingredientesMaisUsados };
