const Service = require('./service');

class TelefonoService extends Service {

    constructor({ TelefonoRepository }) {
        super(TelefonoRepository);
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const telefono = await this._repository.getById(id);
        return telefono;
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters) {
        const telefonos = await this._repository.getAll(filters);
        return telefonos;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(params) {
        const telefono = await this._repository.create(params);
        return telefono;
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async delete(id) {
        const telefono = await this._repository.delete(id);
        return telefono;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(params) {
        const telefono = await this._repository.modify(params);
        return telefono;
    }
}

module.exports = TelefonoService;