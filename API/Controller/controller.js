const Goods = require('../DB/Goods');


class Controller {
    getAllGoods = (req,res) =>{
        Goods.getAllGoods().then(data=>{
            res.status(200).json({response:data})
        }).catch(e=>{
            res.status(400).json({response:e})
        })
    }
    getGoodById = (req,res) =>{
        Goods.getGoodById(req.body).then(data=>{
            res.status(200).json({response:data})
        }).catch(e=>{
            res.status(400).json({response:e})
        })
    }
    setGood = (req,res) =>{
        Goods.setGood(req.body).then(data=>{
            res.status(200).json({response:data})
        }).catch(e=>{
            res.status(400).json({response:e})
        })
    }
    setOrder = (req,res) =>{
        Goods.Setorder(req.body).then(data=>{
            res.status(200).json({response:data});
        }).catch(e=>{
            res.status(400).json({response:e});
        });
    }
};

module.exports = new Controller();
