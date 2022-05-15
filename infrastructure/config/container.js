class Container {

    // Propiedad estática
    static #instance = null;

    // Propiedades privadas
    #awilix;
    #container;

    constructor() {
        this.#awilix    = require('awilix');
        this.#container = this.#awilix.createContainer();

        // Models ORM
        this.#container.register({
            TelefonoModel: this.#awilix.asFunction(require('../../core/domain/models/telefono.model')).singleton(),
            UsuarioModel: this.#awilix.asFunction(require('../../core/domain/models/usuario.model')).singleton(),
        });

        // Entities
        this.#container.register({
            TelefonoEntity: this.#awilix.asClass(require('../../core/domain/entities/telefono.entity')).singleton(),
            UsuarioEntity: this.#awilix.asClass(require('../../core/domain/entities/usuario.entity')).singleton(),
        });

        // Repositories
        this.#container.register({
            TelefonoRepository: this.#awilix.asClass(require('../../core/domain/repositories/telefono.repository')).singleton(),
            UsuarioRepository: this.#awilix.asClass(require('../../core/domain/repositories/usuario.repository')).singleton(),
        });

        // Services
        this.#container.register({
            TelefonoService: this.#awilix.asClass(require('../../core/services/telefono.service')).singleton(),
            UsuarioService: this.#awilix.asClass(require('../../core/services/usuario.service')).singleton(),
        });

        // Endpoints
        this.#container.register({
            TelefonoController: this.#awilix.asClass(require('../../core/controllers/telefono.controller')).singleton(),
            UsuarioController: this.#awilix.asClass(require('../../core/controllers/usuario.controller')).singleton(),
        });

        // Databases
        this.#container.register({
            db: this.#awilix.asValue(require('../../core/domain/models')),
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