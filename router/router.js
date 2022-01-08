const router = require('express').Router();
const Controller = require('../API/Controller/controller');

router.get('/getAllGoods',Controller.getAllGoods);
router.post('/getGoodByType',Controller.getGoodById);
router.post('/setOrder',Controller.setOrder);
router.post('/setGood',Controller.setGood);

module.exports = router