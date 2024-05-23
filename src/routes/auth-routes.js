const app = require('../../app');
const router = require('express').Router();
const authController = require('../controllers/auth-controller');

router.post('/login', authController.login);
router.get('/validateToken', authController.validateToken);

module.exports = router;