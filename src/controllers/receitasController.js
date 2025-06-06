const receitasService = require('../services/receitasService');

async function listar(req, res) {
  const dados = await receitasService.listarReceitas();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const receita = await receitasService.buscarReceitaPorId(id);
  if (!receita) return res.status(404).send('Receita não encontrado');
  res.json(receita);
}

async function criar(req, res) {
    const { NOME_RECEITA, MODO_PREPARO, TEMPO_PREPARO, PORCOES, ID_CATEGORIA } = req.body;
    const novo = await receitasService.CadastrarReceita(NOME_RECEITA, MODO_PREPARO, TEMPO_PREPARO, PORCOES, ID_CATEGORIA);    
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { NOME_RECEITA, MODO_PREPARO, TEMPO_PREPARO, PORCOES, ID_CATEGORIA } = req.body;
  const atualizado = await receitasService.atualizarReceita(id,NOME_RECEITA, MODO_PREPARO, TEMPO_PREPARO, PORCOES, ID_CATEGORIA);
  res.json(atualizado);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await receitasService.deletarReceita(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
