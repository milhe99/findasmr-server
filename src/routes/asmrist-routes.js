const app = require('../../app');
const router = require('express').Router();
const asmristController = require('../controllers/asmrist-controller');
const authenticateToken = require('../middleware/auth-middleware');

router.get('/',  asmristController.getAllAsmrists);
router.get('/:id', asmristController.getAsmristById);
router.post('/', authenticateToken, asmristController.createAsmrist);
router.put('/:id', authenticateToken, asmristController.updateAsmrist);
router.delete('/:id', authenticateToken, asmristController.deleteAsmrist);

module.exports = router;