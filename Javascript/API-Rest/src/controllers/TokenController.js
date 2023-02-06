/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    // Se o email ou a senha forem inválidos
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }
    const user = await User.findOne({ where: { email } });
    // Se o usuário não existir
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    // Se a senha for inválida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    // Obtendo o id do usuário
    const { id } = user;
    // Gerando o token de acesso
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // Retornando o token
    return res.json({ token, user });
  }
}

export default new TokenController();
