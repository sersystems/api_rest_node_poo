const Service = require('./service');

class TelefonoService extends Service {

    constructor({ TelefonoRepository }) {
        super(TelefonoRepository);
    }

    /**
     * @param {Number} id
     * @returns {TelefonoEntity}
     */
    async getById(id) {
        const telefono = await this._repository.getById(id);
        return telefono;
    }

    /**
     * @returns {Array}
     */
    async getAll(filters) {
        const telefonos = await this._repository.getAll(filters);
        return telefonos;
    }

    /**
     * @param {TelefonoEntity} telefono
     * @returns {TelefonoEntity}
     */
    async create(params) {
        const telefono = await this._repository.create(params);
        return telefono;
    }

    /**
     * @param {Number} id
     * @returns {Boolean}
     */
    async delete(id) {
        return id;// await this._repository.delete(telefono);
    }

    /**
     * @param {TelefonoEntity} telefono
     * @returns {TelefonoEntity}
     */
    async modify(params) {
        const telefono = await this._repository.modify(params);
        return telefono;
    }
}

module.exports = TelefonoService;