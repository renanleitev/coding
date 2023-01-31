import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      // Criando um novo aluno com base no conteúdo da requisição
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      // Obtendo o id passado pela requisição
      const { id } = req.params;
      // Verificando se o id existe
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Encontrando o aluno por id
      const aluno = await Aluno.findByPk(id);
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      // Obtendo o id passado pela requisição
      const { id } = req.params;
      // Verificando se o id existe
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Encontrando o aluno por id
      const aluno = await Aluno.findByPk(id);
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // Atualiza o aluno com as informações da requisição
      const updatedAluno = await aluno.update(req.body);
      return res.json(updatedAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      // Obtendo o id passado pela requisição
      const { id } = req.params;
      // Verificando se o id existe
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Encontrando o aluno por id
      const aluno = await Aluno.findByPk(id);
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // Apagando o aluno da tabela
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new AlunoController();
