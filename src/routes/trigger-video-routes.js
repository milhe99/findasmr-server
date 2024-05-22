const app = require('../../app');
const router = require('express').Router();
const triggervideocontroller = require('../controllers/trigger-video-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  triggervideocontroller.getAllTriggerVideos);
router.get('/:triggerId/:videoId', triggervideocontroller.getTriggerVideoById);
router.post('/', authenticateToken, triggervideocontroller.createTriggerVideo);
router.put('/:id', authenticateToken, triggervideocontroller.updateTriggerVideo);
router.delete('/:id', authenticateToken, triggervideocontroller.deleteTriggerVideo);

module.exports = router;