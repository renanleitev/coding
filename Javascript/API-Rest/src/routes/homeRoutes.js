/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = new Router();
// req = Requisição / res = Resposta
router.get('/', HomeController.index);

export default router;
