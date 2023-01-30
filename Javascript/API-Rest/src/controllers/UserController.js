import User from '../models/User';

class UserController {
  // Store = Armazenando na base de dados
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  // Index = Lista todos os usuários
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show = Mostra um usuário específico
  async show(req, res) {
    try {
      const { id } = req.params;
      const users = await User.findByPk(id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update = Atualiza um usuário
  async update(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const updatedUser = await user.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
