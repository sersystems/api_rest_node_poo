const Repository = require('./repository');

class TelefonoRepository extends Repository {

    constructor({ db, TelefonoEntity }) {
        super(db, TelefonoEntity);
    }

    /**
     * @param {Number} id
     * @returns {TelefonoEntity}
     */
    async getById(id) {
        const telefono = this._entity;
        telefono.id = id;
        return telefono;
    }

    /**
     * @returns {Array}
     */
    async getAll(filters) {
        const telefonos = [this._entity, this._entity, this._entity];
        return telefonos + filters;
    }

    /**
     * @param {TelefonoEntity} telefono
     * @returns {TelefonoEntity}
     */
    async create(params) {
        const telefono = this._entity;
        telefono.id = params.id || 1;
        telefono.usuario_id = 1;
        telefono.numero = 1;
        return telefono;
    }

    /**
     * @param {Number} id
     * @returns {Boolean}
     */
    async delete(id) {
        return id;
       // return await this._repository.delete(id);
    }

    /**
     * @param {TelefonoEntity} telefono
     * @returns {TelefonoEntity}
     */
    async modify(params) {
        //const telefono = await this._repository.modify(pTelefono);
        return params;
    }
}

module.exports = TelefonoRepository;