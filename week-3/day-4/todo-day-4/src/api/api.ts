
import { Router } from 'express';
import todoRouter from '../router/todoRouter';
import UserRouter from '../router';
import { auth } from '../middleware/auth';

const router=Router();

router.use('/todo',auth,todoRouter);
router.use('/user',UserRouter);

export default router;