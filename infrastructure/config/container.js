class Container {

    // Propiedad estática
    static #instance = null;

    // Propiedades privadas
    #awilix;
    #container;

    constructor() {
        this.#awilix    = require('awilix');
        this.#container = this.#awilix.createContainer();

        // Entities
        this.#container.register({
            TelefonoEntity: this.#awilix.asClass(require('../../core/domain/entities/telefono.entity')).scoped(),
            UsuarioEntity: this.#awilix.asClass(require('../../core/domain/entities/usuario.entity')).scoped(),
        });

        // Repositories
        this.#container.register({
            TelefonoRepository: this.#awilix.asClass(require('../../core/domain/repositories/telefono.repository')).scoped(),
            UsuarioRepository: this.#awilix.asClass(require('../../core/domain/repositories/usuario.repository')).scoped(),
        });

        // Services
        this.#container.register({
            TelefonoService: this.#awilix.asClass(require('../../core/services/telefono.service')).scoped(),
            UsuarioService: this.#awilix.asClass(require('../../core/services/usuario.service')).scoped(),
        });

        // Endpoints
        this.#container.register({
            TelefonoController: this.#awilix.asClass(require('../../core/controllers/telefono.controller')).scoped(),
            UsuarioController: this.#awilix.asClass(require('../../core/controllers/usuario.controller')).scoped(),
        });
    }

    /**
     * Método estático - Pátron Singleton
     *
     * @returns {Container}
     */
    static getContainer() {
        if (!this.#instance) {
            this.#instance = new Container();
        }
        return this.#instance.#container;
    }
}

module.exports = Container;