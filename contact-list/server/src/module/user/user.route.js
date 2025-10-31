import express from 'express';
import { createUser , getUsers,loginUser, updateUser, deleteUser } from './user.controller.js';

const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/get-user', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;
