import { Router } from 'express';

const router = Router();
const authController = require('../controllers/auth.controller');

router.post('/api/auth/signup', authController.signup);

module.exports = router;