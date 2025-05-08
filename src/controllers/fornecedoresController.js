const fornecedoresService = require('../services/fornecedoresService');

async function listar(req, res) {
  const dados = await fornecedoresService.listarFornecedores();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const fornecedor = await fornecedoresService.buscarFornecedorPorId(id);
  if (!fornecedor) return res.status(404).send('Fornecedo não encontrado');
  res.json(fornecedor);
}

async function criar(req, res) {
  const { NOME_FORNECEDOR, CNPJ, EMAIL,CONTATO,ENDERECO } = req.body;
  const novo = await fornecedoresService.CadastrarFornecedor( NOME_FORNECEDOR, CNPJ, EMAIL,CONTATO,ENDERECO);
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { NOME_FORNECEDOR, CNPJ, EMAIL,CONTATO,ENDERECO } = req.body;
  const atualizado = await fornecedoresService.atualizarFornecedor(id, NOME_FORNECEDOR, CNPJ, EMAIL,CONTATO,ENDERECO);
  res.json(atualizado);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await fornecedoresService.deletarFornecedor(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
