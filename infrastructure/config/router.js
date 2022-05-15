class Router {

    // Propiedad estática
    static #instance = null;

    // Propiedades privadas
    #container;
    #router;

    constructor(router) {
        this.#container = require('./container').getContainer();
        this.#router    = router;
        this.#createRoutes();
    }

    /**
     * Método privado creador de rutas
     */
    #createRoutes() {
        this.#router = this.#container.resolve('TelefonoController').createEndpoints(this.#router);
        this.#router = this.#container.resolve('UsuarioController').createEndpoints(this.#router);
    }

    /**
     * Método estático - Pátron Singleton
     *
     * @param {function} router
     * @returns {Router}
     */
    static getRouter(router) {
        if (!this.#instance) {
            this.#instance = new Router(router);
        }
        return this.#instance.#router;
    }
}

module.exports = Router;