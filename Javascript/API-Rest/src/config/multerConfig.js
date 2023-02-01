/* eslint-disable import/no-extraneous-dependencies */
import multer from 'multer';
import { extname, resolve } from 'path';

// Obtendo um número aleatório, para deixar o nome do arquivo único
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    // req = requisição / file = arquivo enviado / cb = função callback
    destination: (req, file, cb) => {
      // Caminho onde o arquivo deve ser armazenado (pasta uploads)
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      // Definindo o nome do arquivo (data + aleatório + nome sem extensão)
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
