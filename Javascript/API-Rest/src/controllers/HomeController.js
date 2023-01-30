import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Fulano',
      sobrenome: 'Silva',
      email: 'fulanosilva@email.com',
      idade: 33,
      peso: 77,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
