const Goods = require('./model/goods');
const Basket = require('./model/basket');
const Customer = require('./model/customer');

class Good {

    getAllGoods = () => new Promise((resolve,reject)=>{
        Goods.findAll({raw:true,
            attributes:['type_goods'],
            group:['type_goods']
        }).then(data=>{
            if(data.length>0){
                resolve({message:data,status:true});
            }
            else{
                reject({message:'haven`t goods',status:false});
            }
        }).catch(e=>{
            reject({message:`class Good method getAllGoods error ${e}`})
        })
    });
    getGoodById = ({type_goods}) => new Promise((resolve,reject)=>{
        Goods.findAll({raw:false,where:{
            type_goods
        }}).then(data=>{
            if(data.length>0){
                resolve({message:data,status:true});
            }
            else{
                reject({message:'haven`t good',status:false});
            }
        }).catch(e=>{
            reject({message:`class Good method getGoodById ${e}`})
        })
    });

    Setorder = ({customer_info,packages}) => new Promise((resolve,reject)=>{
        let {name_customer,surname_customer,patronime_customer,phone_number,location} = customer_info;
        
        Customer.create({
            name_customer,
            surname_customer,
            patronime_customer,
            phone_number,
            location
        }).then(data=>{
            return data.id_customer
        }).then(customer_id=>{
            if(packages.length>0){
                packages.forEach(element => {
                    Basket.create({
                        goods_id:element.goods_id,
                        count_goods:element.count_goods,
                        customer_id
                    }).then(data=>{
                        resolve({message:data,status:true});
                    }).catch(e=>{
                        Customer.destroy({where:{
                            id_customer:customer_id
                        }}).catch(e=>{
                            reject({message:`Goods class method setorder destroy Customer error ${e}`,status:false});
                        });
                        reject({message:`Goods class method setorder create Basket error ${e}`,status:false});
                    })
                });
            }
            else{
                Customer.destroy({where:{
                    id_customer:customer_id
                }}).then(data=>{
                    reject({message:'packages length equal 0',status:false});
                }).catch(e=>{
                    reject({message:`Goods class method setorder destroy Customer error ${e}`,status:false});
                });
            }
        }).catch(e=>{
            reject({message:`Goods class method setorder create Customer  error ${e}`,status:false});
        })
    });
    // setGood = (body) =>new Promise((resolve,reject)=>{
    //     try {
    //         let {type_goods,name_goods,cost_goods,country} = body;
    //         let discont  = body.hasOwnProperty('discont')? body.discont : null; 
    //         Goods.create({type_goods,name_goods,cost_goods,country,discont}).then(data=>{
    //             resolve({message:data,status:true});
    //         }).catch(e=>{
    //             console.error(`class Good method setGood ${e}`);
    //             reject({message:new Error(`class Good method setGood ${e}`)})
    //         })
    //     } catch (e) {
    //         console.error(`class Good method setGood ${e}`);
    //         reject({message:new Error(`class Good method setGood ${e}`)})
    //     }
    // });
}

module.exports = new Good();