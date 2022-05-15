const Repository = require('./repository');

class TelefonoRepository extends Repository {

    constructor({ db, TelefonoEntity }) {
        super(db, TelefonoEntity);
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const telefono = await this._db[this._entity].findOne({
            where: {
                id,
            },
        });

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
        const telefonos = [{ id: 1, nombre: `sergio1a ${filters}` }, { id: 2, nombre: 'sergio2' }, { id: 3, nombre: 'sergio3' }];
        return {
            data: telefonos,
            //status: (telefonos && telefonos.length > 0) ? true : false,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(params) {
        const telefono = { id: 4, nombre: `sergio1a ${params}` };
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
        const done = await this._db[this._entity].destroy({
            where: {
                id,
            },
        });

        return {
            status: done,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(params) {
        const telefono = { id: 4, nombre: `sergio1a ${params}` };
        return {
            data: telefono,
            status: telefono !== null,
        };
    }
}

module.exports = TelefonoRepository;