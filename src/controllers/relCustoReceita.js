const relatorioService = require('../services/relCustoReceita');

async function custoReceita(req, res) {
  const id = parseInt(req.params.id);

  try {
    const dados = await relatorioService.calcularCustoReceita(id);

    if (dados.length === 0) {
      return res.status(404).json({ mensagem: 'Receita não encontrada ou sem ingredientes' });
    }

    const nomeReceita = dados[0].nome_receita.trim();
    const custoTotal = dados.reduce((soma, item) => soma + parseFloat(item.custo_parcial), 0);

    res.json({
      receita: nomeReceita,
      ingredientes: dados.map(item => ({
        nome: item.nome_ingrediente.trim(),
        quantidade: item.quantidade_ingrediente,
        menor_preco: item.menor_preco,
        custo_parcial: item.custo_parcial
      })),
      custo_total: custoTotal.toFixed(2)
    });

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao calcular o custo da receita', detalhes: erro.message });
  }
}

module.exports = {
  custoReceita
};
