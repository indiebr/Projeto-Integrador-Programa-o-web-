const {Administrador: Administrador} = require('../models');

class AdministradorController {
    constructor() {};

    async encontrarTodosAdministradores(req, res) {
        try {
            const administradoresEncontrados = await Administrador.findAll();
            res.status(200).json({administradoresEncontrados});

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async encontrarAdministradoresPorId(req, res) {
        try {
            const id_adm = req.params.id_adm;
            const administradorEncontrado = await Administrador.findByPk(id_adm);

            if (administradorEncontrado) {
                response.status(200).json(administradorEncontrado);
            } else {
                res.status(404).json({error: 'Administrador não encontrado!'});
            }
        
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async criarNovoAdministrador(req, res) {
        try {
            const criacaoAdministrador = await Administrador.create(req.body);
            response.status(200).json(criacaoAdministrador);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async atualizarAdministrador(req, res) {
        try {
            const id_adm = req.param.id_adm;
            const [atualizacaoAdministrador] = await Administrador.update(req.body, {
                where: {id_adm}
            });

            if (atualizacaoAdministrador) {
                res.status(200).json({message: 'Administrador atualizado com sucesso!'});    
            } else {
                res.status(404).json({error: 'Administrador não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async excluirAdministrador(req, res) {
        try {
            const id_adm = req.params.id_adm;
            const exclusaoAdministrador = await Administrador.destroy({
                where: {id_adm}
            });

            if (exclusaoAdministrador) {
                res.status(200).json({message: 'Administrador excluído com sucesso!'});    
            } else {
                res.status(404).json({error: 'Administrador não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
};

module.exports = AdministradorController;