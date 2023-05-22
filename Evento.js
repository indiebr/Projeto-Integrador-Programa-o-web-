const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Evento = sequelize.define('evento', {
    id_event: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_localization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at_report: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at_report: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fk_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id_user'
        }
    }
});

module.exports = Evento;