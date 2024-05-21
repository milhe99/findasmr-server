const app = require('../../app');
const router = require('express').Router();
const triggerController = require('../controllers/trigger-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  triggerController.getAllTriggers);
router.get('/:id', triggerController.getTriggerById);
router.post('/', authenticateToken, triggerController.createTrigger);
router.put('/:id', authenticateToken, triggerController.updateTrigger);
router.delete('/:id', authenticateToken, triggerController.deleteTrigger);

module.exports = router;