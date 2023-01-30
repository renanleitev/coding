import User from '../models/User';

class UserController {
  // Store = Armazenando na base de dados
  async store(req, res) {
    try {
      // Criando um novo usuário
      const newUser = await User.create(req.body);
      // Desestruturando para obter id, nome e email
      const { id, nome, email } = newUser;
      // Retornando o novo usuário criado (id, nome, email)
      return res.json({ id, nome, email });
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
      // Exibindo todos os usuários da base de dados (por id, nome, email)
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show = Mostra um usuário específico
  async show(req, res) {
    try {
      // Encontrando o usuário pelo id
      const user = await User.findByPk(req.params.id);
      // Desestruturando para obter id, nome e email
      const { id, nome, email } = user;
      // Retornando o usuário, caso o id seja válido
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update = Atualiza um usuário
  async update(req, res) {
    try {
      // Encontrando o usuário pelo id
      const user = await User.findByPk(req.userId);
      // Se o usuário não existir
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // Se o usuário existe, ele é atualizado
      const updatedUser = await user.update(req.body);
      // Desestruturando para obter id, nome e email
      const { id, nome, email } = updatedUser;
      // Retornando o usuário, caso o id seja válido
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Delete = Apagando um usuário do sistema
  async delete(req, res) {
    try {
      // Encontrando o usuário pelo id
      const user = await User.findByPk(req.userId);
      // Se o usuário não existir
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      // Se o usuário existir, ele é deletado
      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json(null);
    }
  }
}

export default new UserController();
