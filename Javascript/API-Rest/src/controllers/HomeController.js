import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Beltrano',
      sobrenome: 'Pereira',
      email: 'beltranopereira@email.com',
      idade: 42,
      peso: 98,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
