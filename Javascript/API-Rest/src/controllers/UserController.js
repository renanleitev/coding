import User from '../models/User';

class UserController {
  // Store = Armazenando na base de dados
  async store(req, res) {
    try {
      // Criando um novo usuário
      const newUser = await User.create(req.body);
      // Retornando o novo usuário criado
      return res.json(newUser);
    } catch (e) {
      // Se tiver algum erro, é exibida uma mensagem
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  // Index = Lista todos os usuários
  async index(req, res) {
    try {
      // Exibindo todos os usuários da base de dados
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show = Mostra um usuário específico
  async show(req, res) {
    try {
      // Obtendo o id enviado pela requisição
      const { id } = req.params;
      // Encontrando o usuário pelo id
      const users = await User.findByPk(id);
      // Retornando o usuário, caso o id seja válido
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update = Atualiza um usuário
  async update(req, res) {
    try {
      // Obtendo o id enviado pela requisição
      const { id } = req.params;
      // Se não existir ID
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      // Encontrando o usuário pelo id
      const user = await User.findByPk(id);
      // Se o usuário não existir
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // Se o usuário existe, ele é atualizado
      const updatedUser = await user.update(req.body);
      // Retorna o usuário atualizado
      return res.json(updatedUser);
    } catch (e) {
      return res.json(null);
    }
  }

  // Delete = Apagando um usuário do sistema
  async delete(req, res) {
    try {
      // Obtendo o id enviado pela requisição
      const { id } = req.params;
      // Se não existir ID
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      // Encontrando o usuário pelo id
      const user = await User.findByPk(id);
      // Se o usuário não existir
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // Se o usuário existir, ele é deletado
      await user.destroy();
      // Retorna o usuário deletado
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
