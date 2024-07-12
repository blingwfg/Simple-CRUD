import express from 'express'
import method from '../controllers/controllers.js';
// const method = require('../controllers/controllers.js');

const router = express.Router();

router.get('/user', method.getUser);
router.get('/user/:id', method.getUserById);
router.post('/user', method.ceateUser);
router.patch('/user/:id', method.updateUser);
router.delete('/user/:id', method.deleteUser);

export default router