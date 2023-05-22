const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Administrador = sequelize.define('administrador', {
    id_adm: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    name_adm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_adm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_adm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_adm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Administrador;