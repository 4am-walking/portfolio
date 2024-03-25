import { Router, Request, Response } from 'express';
import verifyJWT from '../middleware/auth.middleware';
import authController from '../controllers/auth.controller';
import testAPI from '../controllers/test.api';

const router = Router();

router.post('/api/auth/signup', authController.signup);

router.post('/api/auth/signin', authController.signin);

router.post('/api/auth/verify', verifyJWT, (req: Request, res: Response) => {
    res.status(200).json({ authenticated: true });
})

router.post('/api/test', testAPI.test);

export default router;