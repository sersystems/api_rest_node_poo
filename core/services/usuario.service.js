const Service = require('./service');

class UsuarioService extends Service {

    constructor({ UsuarioRepository }) {
        super(UsuarioRepository);
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const usuario = (id && id > 0) ? await this._repository.getById(id) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters) {
        const usuarios = await this._repository.getAll(filters);

        return {
            data: usuarios,
            status: usuarios !== null,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const usuario = (body) ? await this._repository.create(body) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async delete(id) {
        return {
            status: (id) ? await this._repository.delete(id) : null,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(id, body) {
        const usuario = (id && id > 0 && body) ? await this._repository.modify(id, body) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }
}

module.exports = UsuarioService;