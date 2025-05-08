const ingredienteService = require('../services/ingredientesService');

async function listar(req, res) {
  const dados = await ingredienteService.listarIngredientes();
  res.json(dados);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const ingrediente = await ingredienteService.buscarIngredientePorId(id);
  if (!ingrediente) return res.status(404).send('Ingrediente não encontrado');
  res.json(ingrediente);
}

async function criar(req, res) {
  const { nome_ingrediente, data_cadastro, unidade_medida } = req.body;
  const novo = await ingredienteService.criarIngrediente(nome_ingrediente, data_cadastro, unidade_medida);
  res.status(201).json(novo);
}

async function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const { nome_ingrediente, data_cadastro, unidade_medida } = req.body;
  const atualizado = await ingredienteService.atualizarIngrediente(id, nome_ingrediente, data_cadastro, unidade_medida);
  res.json(atualizado);
}

async function deletar(req, res) {
  const id = parseInt(req.params.id);
  await ingredienteService.deletarIngrediente(id);
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
