/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    // Obtendo o email e a senha da requisição
    const { email = '', password = '' } = req.body;
    // Se o email ou a senha forem inválidos
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }
    // Identificando o usuário pelo email
    const user = await User.findOne({ where: { email } });
    // Se o usuário não for encontrado
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    // Se a senha for diferente da senha hash salva (senha inválida)
    if (!(await user.passwordIsVald(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenController();
