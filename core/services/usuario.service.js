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
        const usuario = await this._repository.getById(id);
        return usuario;
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters) {
        const usuarios = await this._repository.getAll(filters);
        return usuarios;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(params) {
        const usuario = await this._repository.create(params);
        return usuario;
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async delete(id) {
        const usuario = await this._repository.delete(id);
        return usuario;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(params) {
        const usuario = await this._repository.modify(params);
        return usuario;
    }
}

module.exports = UsuarioService;