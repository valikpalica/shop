const Goods = require('./model/goods');
const Customer = require('./model/customer');
const Basket = require('./model/basket');


Goods.hasMany(Basket,{foreignKey:'goods_id',onDelete:'cascade'});
Customer.hasMany(Basket,{foreignKey:'customer_id',onDelete:'cascade'});
Basket.belongsTo(Goods,{foreignKey:'goods_id'});
Basket.belongsTo(Customer,{foreignKey:'customer_id'});