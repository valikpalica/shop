const router = require('express').Router();
const Controller = require('../API/Controller/controller');

router.get('/getAllGoods',Controller.getAllGoods);
router.post('/getGoodById',Controller.getGoodById);
router.post('/setGood',Controller.setGood);

module.exports = router