const {Evento: Evento} = require('../models');

class EventoController {
    constructor() {};

    async encontrarTodosEventos(req, res) {
        try {
            const eventosEncontrados = await Evento.findAll();
            res.status(200).json(eventosEncontrados);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async encontrarEventosPorId(req, res) {
        try {
            const id_event = req.params.id_event;
            const eventoEncontrado = await Evento.findByPk(id_event);

            if (eventoEncontrado) {
                res.status(200).json(eventoEncontrado);
            } else {
                res.status(404).json({error: 'Evento não encontrado'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async criarNovoEvento(req, res) {
        try {
            const criacaoEvento = await Evento.create(req.body);
            res.status(200).json(criacaoEvento);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async atualizarEvento(req, res) {
        try {
            const id_event = req.params.id_event;
            const [atualizacaoEvento] = await Evento.update(req.body, {
                where: {id_event}
            });

            if (atualizacaoEvento) {
                res.status(202).json({message: 'Evento atualizado com sucesso!'});
            } else {
                res.status(404).json({error: 'Evento não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async excluirEvento(req, res) {
        try {
            const id_event = req.params.id_event;
            const exclusaoEvento = await Evento.destroy({
                where: {id_event}
            });

            if (exclusaoEvento) {
                res.status(200).json({message: 'Evento excluído com sucesso!'});
            } else {
                res.status(404).json({error: 'Evento não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
};

module.exports = EventoController;