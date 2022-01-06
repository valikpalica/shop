const sequlize = require('../sequelize');
const Sequelize = require('sequelize');

const Goods = sequlize.define('Goods',{
    id_goods:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    type_goods:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    name_goods:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cost_goods:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },
    disconts:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
});

module.exports = Goods