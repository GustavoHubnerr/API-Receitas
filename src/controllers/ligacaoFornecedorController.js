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
  const {ID_INGREDIENTE, ID_FORNECEDOR,VALOR_UNITARIO } = req.body;
  const novo = await ligacaoFornecedorService.criarLigacaoFornecedor(ID_INGREDIENTE, ID_FORNECEDOR,VALOR_UNITARIO);
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { ID_INGREDIENTE, ID_FORNECEDOR,VALOR_UNITARIO } = req.body;
  const atualizado = await ligacaoFornecedorService.atualizarLigacaoFornecedor(id,ID_INGREDIENTE, ID_FORNECEDOR,VALOR_UNITARIO);
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
