import { Router } from 'express';

const router = Router();
const authController = require('../controllers/auth.controller');
const testAPI = require('../controllers/test.api');

router.post('/api/auth/signup', authController.signup);

router.post('/api/test', testAPI.test);

module.exports = router;