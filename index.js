const express = require('express');
const app = express();
app.use(express.json());

const AdministradorController = require('./app/controllers/administrador_controller');
const administradorController = new AdministradorController(); 

const UsuarioController = require('./app/controllers/usuario_controller');
const usuarioController = new UsuarioController();

const EventoController = require('./app/controllers/evento_controller');
const eventoController = new EventoController();

app.get('/', (req, res) => {
    res.send('Bem-vindo à API do projeto integrador PlaTheia!');
});

//API Administradores
app.get('/administrador', (req, res) => administradorController.encontrarTodosAdministradores(req, res));
app.get('/administrador/:id_adm', (req, res) => administradorController.encontrarAdministradoresPorId(req, res));
app.post('/administrador', (req, res) => administradorController.criarNovoAdministrador(req, res));
app.put('/administrador/:id_adm', (req, res) => administradorController.atualizarAdministrador(req, res));
app.delete('/administrador/:id_adm', (req, res) => administradorController.excluirAdministrador(req, res));

//API Usuários
app.get('/usuario', (req, res) => usuarioController.encontrarTodosUsuarios(req, res));
app.get('/usuario/:id_user', (req, res) => usuarioController.encontrarUsuariosPorId(req, res));
app.post('/usuario', (req, res) => usuarioController.criarNovoUsuario(req, res));
app.put('/usuario/:id_user', (req, res) => usuarioController.atualizarUsuario(req, res));
app.delete('/usuario/:id_user', (req, res) => usuarioController.excluirUsuario(req, res));

//API Eventos
app.get('/evento', (req, res) => eventoController.encontrarTodosEventos(req, res));
app.get('/evento/:id_event', (req, res) => eventoController.encontrarEventosPorId(req, res));
app.post('/evento', (req, res) => eventoController.criarNovoEvento(req, res));
app.put('/evento/:id_event', (req, res) => eventoController.atualizarEvento(req, res));
app.delete('/evento/:id_event', (req, res) => eventoController.excluirEvento(req, res));

app.listen(3000, () => {
    'Servidor funcionando na porta 3000';
});