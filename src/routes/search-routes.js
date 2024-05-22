const app = require('../../app');
const router = require('express').Router();
const seacrhController = require('../controllers/search-controller');

router.get('/',  seacrhController.search);

module.exports = router;