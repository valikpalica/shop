const Goods  = require('./model/goods');
const Basket = require('./model/basket');
const Customer = require('./model/customer');


class Admin {
    setGoods = (body) => new Promise((resolve,reject)=>{
        let {type_goods,name_goods,cost_goods,country} = body;
        Goods.create({
            type_goods,
            name_goods,
            cost_goods,
            country,
            discont:body.hasOwnProperty('discont')? body.discont : null
        }).then(data=>{
            resolve({message:data});
        }).catch(e=>{
            reject({message:`Error in class Admin method setOrder problem with create order Error: ${e}`})
        });
    });
    changeGoods = ({property,changes,id_goods}) => new Promise((resolve,reject)=>{
        Goods.update({
            [property]:changes
        },{where:{id_goods}}).then(data=>{
            resolve({message:data})
        }).catch(e=>{
            reject({message:`Error in class Admin method changeOrder problem with update oreder Error: ${e}`});
        })
    });
    getAllOrders = () => new Promise((resolve,reject)=>{
        Customer.findAll({
            raw:false
        }).then(data=>{
            resolve({message:data})  
        }).catch(e=>{
            reject({message:`Error in class Admin method getAllOrders problem with findAll orders Error: ${e}`});
        })
    })
    getOrdersById = (id_customer) => new Promise((resolve,reject)=>{
        Customer.findAll({where:{
            id_customer
        },include:[Basket,Goods]}).then(data=>{
            if(data.length>0){
                resolve({message:data});
            }else{
                reject({message:`Error in class Admin method getOrdersById problem with array length Error: ${e}`});
            }
        }).catch(e=>{
            reject({message:`Error in class Admin method getOrdersById problem with findAll customers info Error: ${e} `});
        })
    })
    
}

module.exports = new Admin();