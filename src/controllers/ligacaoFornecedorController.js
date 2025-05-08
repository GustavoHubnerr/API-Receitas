const ligacaoFornecedorService = require('../services/ligacaoFornecedorService');

async function listar(req, res) {
  const dados = await ligacaoFornecedorService.listarIngredientesFornecedor();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const ligacao = await ligacaoFornecedorService.BuscarIngredientesFornecedorPorId(id);
  if (!ligacao) return res.status(404).send('ligação não encontrado');
  res.json(ligacao);
}

async function criar(req, res) {
  const {id_ingrediente, id_fornecedor,valor_unitario } = req.body;
  const novo = await ligacaoFornecedorService.criarLigacaoFornecedor(id_ingrediente, id_fornecedor,valor_unitario);
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { id_ingrediente, id_fornecedor,valor_unitario } = req.body;
  const atualizado = await ligacaoFornecedorService.atualizarLigacaoFornecedor(id,id_ingrediente, id_fornecedor,valor_unitario);
  res.json(atualizado);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await ligacaoFornecedorService.deletarLigacaoFornecedor(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
