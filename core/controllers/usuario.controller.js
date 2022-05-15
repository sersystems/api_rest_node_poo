const Controller = require('./controller');

class UsuarioController extends Controller {

    constructor({ UsuarioService }) {
        super(UsuarioService);
    }

    /**
     * @param {Object} router
     * @returns {Object}
     */
    getRoutes(router) {
        router.get('/show/:id', (req, res) => {
            this._service
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

        router.get('/list', (req, res) => {
            this._service
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

        router.post('/create', (req, res) => {
            this._service
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

        router.delete('/delete/:id', (req, res) => {
            this._service
                .delete(req.params.id)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario eliminado satisfactoriamente.' : 'No se logró eliminar el usuario.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.put('/modify/:id', (req, res) => {
            this._service
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

module.exports = UsuarioController;