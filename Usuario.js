const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Usuario = sequelize.define('usuario', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at_user: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at_user: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Usuario;