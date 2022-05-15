const Controller = require('./controller');

class UsuarioEndpoint extends Controller {

    constructor({ UsuarioService }) {
        super(UsuarioService);
    }

    getRoutes(router) {
        router.get('/usuario/show/:id', (req, res) => {
            this.service
                .getById(req.params.id)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario hallado satisfactoriamente.' : 'No se halló un usuario que coincida con el ID indicado.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.get('/usuario/list', (req, res) => {
            this.service
                .getAll(req.params)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuarios hallados satisfactoriamente.' : 'No se hallaron usuarios que coincida con el filtro indicado.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.post('/usuario/create', (req, res) => {
            this.service
                .create(req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario creado satisfactoriamente.' : 'No se logró crear el usuario.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.delete('/usuario/delete/:id', (req, res) => {
            this.service
                .delete(req.params.id)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario eliminado satisfactoriamente.' : 'No se logró eliminar el usuario.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.put('/usuario/modify/:id', (req, res) => {
            this.service
            .modify(req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario modificado satisfactoriamente.' : 'No se logró modificar el usuario.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        return router;
    }
}

module.exports = UsuarioEndpoint;