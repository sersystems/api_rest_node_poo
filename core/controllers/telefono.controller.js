const Controller = require('./controller');

class TelefonoController extends Controller {

    constructor({ TelefonoService }) {
        super(TelefonoService);
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
                        mesaage: (result.status) ? 'Teléfono hallado satisfactoriamente.' : 'No se halló un teléfono que coincida con el ID indicado.',
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
                        mesaage: (result.status) ? 'Teléfonos hallados satisfactoriamente.' : 'No se hallaron teléfonos que coincida con el filtro indicado.',
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
                        mesaage: (result.status) ? 'Teléfono creado satisfactoriamente.' : 'No se logró crear el teléfono.',
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
                        mesaage: (result.status) ? 'Teléfono eliminado satisfactoriamente.' : 'No se logró eliminar el teléfono.',
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
                        mesaage: (result.status) ? 'Teléfono modificado satisfactoriamente.' : 'No se logró modificar el teléfono.',
                    });
                });
        });

        return router;
    }
}

module.exports = TelefonoController;