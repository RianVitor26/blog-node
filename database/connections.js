const Sequelize = require('sequelize')
const connections = new Sequelize('connections', 'root', 'Rvsa20020326', {
    host: 'localhost',
    dialect: 'mysql'
})