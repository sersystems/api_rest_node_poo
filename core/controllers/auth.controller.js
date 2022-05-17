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

        router.post('/login', (req, res) => {
            this.#service
            .login(req.body)
                .then((result) => {
                    res.header('auth-token', result.token).json({
                        status: result.status,
                        data: {
                            token: result.token,
                        },
                    });
                });
        });

        return router;
    }
}

module.exports = AuthController;