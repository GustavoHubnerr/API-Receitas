const ingredientesMaisUsadosService = require('../services/ingredientesMaisUsados');

async function getIngredientesMaisUsados(req, res) {
  try {
    const resultado = await ingredientesMaisUsadosService.ingredientesMaisUsados();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao gerar o relatório',
      detalhes: error.message,
    });
  }
}

module.exports = { getIngredientesMaisUsados };
