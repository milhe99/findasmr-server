const app = require('../../app');
const router = require('express').Router();
const userVideoController = require('../controllers/user-video-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  userVideoController.getAllUserVideos);
router.get('/:id', userVideoController.getUserVideoById);
router.post('/', authenticateToken, userVideoController.createUserVideo);
router.put('/:id', authenticateToken, userVideoController.updateUserVideo);
router.delete('/:userId/:videoId', authenticateToken, userVideoController.deleteUserVideo);

module.exports = router;