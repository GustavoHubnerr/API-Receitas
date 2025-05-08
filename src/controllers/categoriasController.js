// controllers/categorias.js
const categoriaService = require('../services/categoriaService');

async function listar(req, res) {
  const dados = await categoriaService.listarCategorias();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const categoria = await categoriaService.buscarCategoriaPorId(id);
  if (!categoria) return res.status(404).send('Categoria não encontrada');
  res.json(categoria);
}

  async function criar(req, res) {
    const { NOME_CATEGORIA } = req.body;
    const nova = await categoriaService.criarCategoria(NOME_CATEGORIA);
    res.status(201).json(nova);
  }


async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { NOME_CATEGORIA } = req.body;
  const atualizada = await categoriaService.atualizarCategoria(id, NOME_CATEGORIA);
  res.json(atualizada);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await categoriaService.deletarCategoria(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
