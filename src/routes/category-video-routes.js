const app = require('../../app');
const router = require('express').Router();
const categoryvideocontroller = require('../controllers/category-video-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  categoryvideocontroller.getAllCategoryVideos);
router.get('/:categoryId/:videoId', categoryvideocontroller.getCategoryVideoById);
router.post('/', authenticateToken, categoryvideocontroller.createCategoryVideo);
router.put('/:id', authenticateToken, categoryvideocontroller.updateCategoryVideo);
router.delete('/:id', authenticateToken, categoryvideocontroller.deleteCategoryVideo);

module.exports = router;