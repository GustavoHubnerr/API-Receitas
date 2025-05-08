const ligacaoReceitasService = require('../services/ligacaoReceitasService');

async function listar(req, res) {
  const dados = await ligacaoReceitasService.listarReceitasIngredientes();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const ligacao = await ligacaoReceitasService.BuscarReceitasIngredientesPorId(id);
  if (!ligacao) return res.status(404).send('ligação não encontrado');
  res.json(ligacao);
}

async function criar(req, res) {
  const {id_receita, id_ingrediente,quantidade } = req.body;
  const novo = await ligacaoReceitasService.criarLigacaoReceita(id_receita, id_ingrediente,quantidade);
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { id_receita, id_ingrediente,quantidade } = req.body;
  const atualizado = await ligacaoReceitasService.atualizarLigacaoReceita(id, id_receita, id_ingrediente,quantidade);
  res.json(atualizado);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await ligacaoReceitasService.deletarLigacaoReceita(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
