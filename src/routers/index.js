const categoriasRouter = require('./categorias');
const ingredientesRouter = require('./ingredientes');
const fornecedoresRouter = require('./fornecedores');
const receitasRouter = require('./receitas');
const ligacaoReceitasRouter = require('./ligacaoReceitas');
const ligacaoFornecedorRouter = require('./ligacaoFornecedor');
const custoReceitaRouter = require('./custoReceita');
const ingredientesMaisUsadosRouter = require('./ingredientesMaisUsados');



module.exports = (app) => {
  app.use('/categorias', categoriasRouter);
  app.use('/ingredientes', ingredientesRouter); 
  app.use('/fornecedores', fornecedoresRouter);
  app.use('/receitas', receitasRouter); 
  app.use('/ligacaoReceitas', ligacaoReceitasRouter); 
  app.use('/ligacaoFornecedor', ligacaoFornecedorRouter); 
  app.use('/custoReceita', custoReceitaRouter);
  app.use('/ingredientesMaisUsados', ingredientesMaisUsadosRouter);
};
