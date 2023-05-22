const sequelize = require('../../database');
const Administrador = require('./Administrador');
const Usuario = require('./Usuario');
const Evento = require('./Evento');

const models = {
    Administrador,
    Usuario,
    Evento
};

Usuario.hasMany(Evento, {foreignKey: 'fk_user', as: 'evento'});
Evento.belongsTo(Usuario, {foreignKey: 'fk_user', as: 'usuario'});

const options = {
    alter: true,
    beforeAssociate: async (sequelizeInstance) => {
        await Usuario.init({}, {sequelize: sequelizeInstance});
        await Usuario.sync();
    }
};

sequelize.sync(options);

module.exports = models;