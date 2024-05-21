const app = require('../../app');
const router = require('express').Router();
const tagController = require('../controllers/tag-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  tagController.getAllTags);
router.get('/:id', tagController.getTagById);
router.post('/', authenticateToken, tagController.createTag);
router.put('/:id', authenticateToken, tagController.updateTag);
router.delete('/:id', authenticateToken, tagController.deleteTag);

module.exports = router;