const Controller = require('./controller');

class TelefonoEndpoint extends Controller {

    constructor({ TelefonoService }) {
        super(TelefonoService);
    }

    getRoutes(router) {
        router.get('/telefono/show/:id', (req, res) => {
            this.service
                .getById(req.params.id)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Teléfono hallado satisfactoriamente.' : 'No se halló un teléfono que coincida con el ID indicado.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.get('/telefono/list', (req, res) => {
            this.service
                .getAll(req.params)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Teléfonos hallados satisfactoriamente.' : 'No se hallaron teléfonos que coincida con el filtro indicado.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.post('/telefono/create', (req, res) => {
            this.service
                .create(req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Teléfono creado satisfactoriamente.' : 'No se logró crear el teléfono.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.delete('/telefono/delete/:id', (req, res) => {
            this.service
                .delete(req.params.id)
                .then((result) => {
                    res.status((result.status) ? 200 : 204).json({
                        status: result.status,
                        mesaage: (result.status) ? 'Teléfono eliminado satisfactoriamente.' : 'No se logró eliminar el teléfono.',
                    });
                }).catch((err) => {
                    res.status(403).json({
                        error: err,
                    });
                });
        });

        router.put('/telefono/modify/:id', (req, res) => {
            this.service
            .modify(req.body)
                .then((result) => {
                    res.status((result.status) ? 201 : 204).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Teléfono modificado satisfactoriamente.' : 'No se logró modificar el teléfono.',
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

module.exports = TelefonoEndpoint;