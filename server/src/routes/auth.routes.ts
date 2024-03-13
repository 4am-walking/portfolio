import { Router, Request, Response } from 'express';

const router = Router();
const authController = require('../controllers/auth.controller');
const testAPI = require('../controllers/test.api');
const middleware = require('../middleware/auth.middleware');

router.post('/api/auth/signup', authController.signup);

router.post('/api/auth/signin', authController.signin);

router.post('/api/auth/verify', middleware.authMiddleware, (req: Request, res: Response) => {
    res.status(200).json({ authenticated: true });
})

router.post('/api/test', testAPI.test);

module.exports = router;