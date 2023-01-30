import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  // Se o token de autorização for inválido
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  // Separando a palavra 'Bearer' do token
  const [, token] = authorization.split(' ');
  try {
    // Somente o usuário com o token pode se editar
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // Obtendo o id e email passados
    const { id, email } = dados;
    // Verificando se o usuário foi atualizado
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    // Se o usuário foi atualizado, o token antigo é inválido
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
