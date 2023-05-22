const {Usuario: Usuario, Evento: Evento} = require('../models');

class UsuarioController {
    constructor() {};

    async encontrarTodosUsuarios(req, res) {
        try {
            const usuariosEncontrados = await Usuario.findAll({include: {model: Evento, as: 'evento'}});
            res.status(200).json({usuariosEncontrados});

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async encontrarUsuariosPorId(req, res) {
        try {
            const id_user = req.params.id_user;
            const usuarioEncontrado = await Usuario.findByPk(id_user, {include: {model: Evento, as: 'evento'}});

            if (usuarioEncontrado) {
                response.status(200).json(usuarioEncontrado);
            } else {
                res.status(404).json({error: 'Usuário não encontrado!'});
            }
        
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async criarNovoUsuario(req, res) {
        try {
            const criacaoUsuario = await Usuario.create(req.body);
            response.status(200).json(criacaoUsuario);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async atualizarUsuario(req, res) {
        try {
            const id_user = req.param.id_user;
            const [atualizacaoUsuario] = await Usuario.update(req.body, {
                where: {id_user}
            });

            if (atualizacaoUsuario) {
                res.status(200).json({message: 'Usuário atualizado com sucesso!'});    
            } else {
                res.status(404).json({error: 'Usuário não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async excluirUsuario(req, res) {
        try {
            const id_user = req.params.id_user;
            const exclusaoUsuario = await Usuario.destroy({
                where: {id_user}
            });

            if (exclusaoUsuario) {
                res.status(200).json({message: 'Usuário excluído com sucesso!'});    
            } else {
                res.status(404).json({error: 'Usuário não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
};

module.exports = UsuarioController;