const app = require('../../app');
const router = require('express').Router();
const categoryController = require('../controllers/category-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', authenticateToken, categoryController.createCategory);
router.put('/:id', authenticateToken, categoryController.updateCategory);
router.delete('/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router;