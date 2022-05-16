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
        const telefono = (id && id > 0) ? await this._repository.getById(id) : null;

        return {
            data: telefono,
            status: telefono !== null,
        };
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters) {
        const telefonos = await this._repository.getAll(filters);

        return {
            data: telefonos,
            status: telefonos !== null,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const telefono = (body) ? await this._repository.create(body) : null;

        return {
            data: telefono,
            status: telefono !== null,
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
        const telefono = (id && id > 0 && body) ? await this._repository.modify(id, body) : null;

        return {
            data: telefono,
            status: telefono !== null,
        };
    }
}

module.exports = TelefonoService;