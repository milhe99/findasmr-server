const app = require('../../app');
const router = require('express').Router();
const tagvideocontroller = require('../controllers/tag-video-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  tagvideocontroller.getAllTagVideos);
router.get('/:tagId/:videoId', tagvideocontroller.getTagVideoById);
router.post('/', authenticateToken, tagvideocontroller.createTagVideo);
router.put('/:id', authenticateToken, tagvideocontroller.updateTagVideo);
router.delete('/:id', authenticateToken, tagvideocontroller.deleteTagVideo);

module.exports = router;