/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir (falha de segurança)
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);

// Podem existir (CRUD)
router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
