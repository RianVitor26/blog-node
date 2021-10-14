// Config o banco de dados com o sequelize
const { Sequelize, DataTypes } = require('sequelize')
const connections = require('../database/connections.js')

// Definindo um model para o post
const Posts = connections.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false 
    }
})

module.exports = Posts