const Admin = require('../API/DB/Admin');

const Router = require('express').Router();

Router.get('/adminPanel',(req,res)=>{
    res.render('main.hbs');
})
Router.post('/setGoods',(req,res)=>{
    Admin.setGoods(req.body).then(data=>{
        res.status(200).json(data);
    }).catch(e=>{
        res.status(400).json(e);
    });
});
Router.get('/getAllOrders',(req,res)=>{
    Admin.getAllOrders().then(data=>{
        res.status(200).json(data);
    }).catch(e=>{
        res.status(400).json(e);
    });
});
Router.get('getOrderById/:id',(req,res)=>{
    let id = req.params['id'];
    Admin.getOrdersById(id).then(data=>{
        res.status(200).json(data);
    }).catch(e=>{
        res.status(400).json(e);
    });

});
module.exports = Router;