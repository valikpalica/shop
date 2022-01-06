const sequelize = require('./sequelize');
require('./model/goods');

const startDB = () =>
    sequelize.sync(/*{force: true}*/).then(result=>{
        console.log(`connect with db`);
    }).catch(e=>{
        console.error(`Error with connect DB ${e}`);
        throw new Error(`Error with connect DB ${e}`);
    });


module.exports = startDB;