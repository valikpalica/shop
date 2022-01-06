const Sequelize = require('sequelize');
const {db} = require('../../configure.json');
const sequelize = new Sequelize(db.name_db,db.name_user,db.password_db,{
    dialect:db.dialect,
    host:db.host_db,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;