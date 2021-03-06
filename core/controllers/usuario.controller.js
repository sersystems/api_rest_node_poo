const Controller = require('./controller');

class UsuarioController extends Controller {

    constructor({ AuthService, UsuarioService }) {
        super(AuthService, UsuarioService);
    }

    /**
     * @param {Object} router
     * @returns {Object}
     */
    getRoutes(router) {
        router.get('/show/:id', this._auth.verifyToken, (req, res) => {
            this._service
                .getById(req.params.id)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario hallado satisfactoriamente.' : 'No se halló un usuario que coincida con el ID indicado.',
                    });
                });
        });

        router.get('/show/:email', this._auth.verifyToken, (req, res) => {
            this._service
                .getByEmail(req.params.email)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario hallado satisfactoriamente.' : 'No se halló un usuario que coincida con el email indicado.',
                    });
                });
        });

        router.get('/list', this._auth.verifyToken, (req, res) => {
            this._service
                .getAll(req.query)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuarios hallados satisfactoriamente.' : 'No se hallaron usuarios que coincida con el filtro indicado.',
                    });
                });
        });

        router.post('/create', this._auth.verifyToken, (req, res) => {
            this._service
                .create(req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario creado satisfactoriamente.' : 'No se logró crear el usuario.',
                    });
                });
        });

        router.delete('/delete/:id', this._auth.verifyToken, (req, res) => {
            this._service
                .delete(req.params.id)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario eliminado satisfactoriamente.' : 'No se logró eliminar el usuario.',
                    });
                });
        });

        router.put('/modify/:id', this._auth.verifyToken, (req, res) => {
            this._service
            .modify(req.params.id, req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario modificado satisfactoriamente.' : 'No se logró modificar el usuario.',
                    });
                });
        });

        return router;
    }
}

module.exports = UsuarioController;