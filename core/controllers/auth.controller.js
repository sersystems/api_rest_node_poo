class AuthController {

    // Propiedad privada
    #service;

    constructor({ AuthService }) {
        this.#service = AuthService;
    }

    /**
     * @param {Object} router
     * @returns {Object}
     */
    getRoutes(router) {

        router.post('/signin', (req, res) => {
            this.#service
            .signIn(req.body)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        token: result.token,
                        mesaage: (result.status) ? 'Usuario autenticado satisfactoriamente.' : 'Usuario no se logró auntenticar el usuario.',
                    });
                });
        });

        router.post('/signup', (req, res) => {
            this.#service
            .signUp(req.body)
                .then((result) => {
                    res.status(200).json({
                        data: result.data,
                        status: result.status,
                        mesaage: (result.status) ? 'Usuario registrado satisfactoriamente.' : 'No se logró registrar el usuario.',
                    });
                });
        });

        return router;
    }
}

module.exports = AuthController;