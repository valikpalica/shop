const Goods = require('./model/goods');

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
            console.error(`class Good method getAllGoods error ${e}`);
            reject({message:new Error(`class Good method getAllGoods error ${e}`)})
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
            console.error(`class Good method getGoodById ${e}`);
            reject({message:new Error(`class Good method getGoodById ${e}`)})
        })
    });
    setGood = (body) =>new Promise((resolve,reject)=>{
        try {
            let {type_goods,name_goods,cost_goods,country} = body;
            let discont  = body.hasOwnProperty('discont')? body.discont : null; 
            Goods.create({type_goods,name_goods,cost_goods,country,discont}).then(data=>{
                resolve({message:data,status:true});
            }).catch(e=>{
                console.error(`class Good method setGood ${e}`);
                reject({message:new Error(`class Good method setGood ${e}`)})
            })
        } catch (e) {
            console.error(`class Good method setGood ${e}`);
            reject({message:new Error(`class Good method setGood ${e}`)})
        }
    });
    
}

module.exports = new Good();