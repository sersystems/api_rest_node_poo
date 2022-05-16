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
            TelefonoEntity: this.#awilix.asClass(require('../../core/domain/entities/telefono.entity')).singleton(),
            UsuarioEntity: this.#awilix.asClass(require('../../core/domain/entities/usuario.entity')).singleton(),
        });

        // Repositories
        this.#container.register({
            AuthRepository: this.#awilix.asClass(require('../../core/domain/repositories/auth.repository')).singleton(),
            TelefonoRepository: this.#awilix.asClass(require('../../core/domain/repositories/telefono.repository')).singleton(),
            UsuarioRepository: this.#awilix.asClass(require('../../core/domain/repositories/usuario.repository')).singleton(),
        });

        // Services
        this.#container.register({
            AuthService: this.#awilix.asClass(require('../../core/services/auth.service')).singleton(),
            TelefonoService: this.#awilix.asClass(require('../../core/services/telefono.service')).singleton(),
            UsuarioService: this.#awilix.asClass(require('../../core/services/usuario.service')).singleton(),
        });

        // Controllers
        this.#container.register({
            AuthController: this.#awilix.asClass(require('../../core/controllers/auth.controller')).singleton(),
            TelefonoController: this.#awilix.asClass(require('../../core/controllers/telefono.controller')).singleton(),
            UsuarioController: this.#awilix.asClass(require('../../core/controllers/usuario.controller')).singleton(),
        });

        // Databases
        this.#container.register({
            db: this.#awilix.asValue(require('../../core/domain/models')),
        });

        // Others
        this.#container.register({
            Bcrypt: this.#awilix.asValue(require('bcryptjs')),
            JWT: this.#awilix.asValue(require('jsonwebtoken')),
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