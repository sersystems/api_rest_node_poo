const Controller = require('./controller');

class RolController extends Controller {

    constructor({ AuthService, RolService }) {
        super(AuthService, RolService);
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
                        mesaage: (result.status) ? 'Rol hallado satisfactoriamente.' : 'No se halló un rol que coincida con el ID indicado.',
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
                        mesaage: (result.status) ? 'Rols hallados satisfactoriamente.' : 'No se hallaron rols que coincida con el filtro indicado.',
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
                        mesaage: (result.status) ? 'Rol creado satisfactoriamente.' : 'No se logró crear el rol.',
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
                        mesaage: (result.status) ? 'Rol eliminado satisfactoriamente.' : 'No se logró eliminar el rol.',
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
                        mesaage: (result.status) ? 'Rol modificado satisfactoriamente.' : 'No se logró modificar el rol.',
                    });
                });
        });

        return router;
    }
}

module.exports = RolController;