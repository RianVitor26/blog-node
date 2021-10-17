const Sequelize = require('sequelize')
const connections = new Sequelize('connections', 'root', 'olamysql', {
    host: 'localhost',
    dialect: 'mysql',
    storage: 'blog.myd'
})

module.exports = connections
