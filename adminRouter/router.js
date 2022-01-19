const Router = require('express').Router();

Router.get('/adminPanel',(req,res)=>{
    res.render('main.hbs');
})

module.exports = Router;