const app = require('../../app');
const router = require('express').Router();
const videoController = require('../controllers/video-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  videoController.getAllVideos);
router.get('/:id', videoController.getVideoById);
router.post('/', authenticateToken, videoController.createVideo);
router.put('/:id', authenticateToken, videoController.updateVideo);
router.delete('/:id', authenticateToken, videoController.deleteVideo);

module.exports = router;