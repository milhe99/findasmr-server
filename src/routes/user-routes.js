const app = require('../../app');
const router = require('express').Router();
const userController = require('../controllers/user-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', authenticateToken, userController.createUser);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;