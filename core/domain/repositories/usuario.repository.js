const Repository = require('./repository');

class UsuarioRepository extends Repository {

    constructor({ db, UsuarioEntity }) {
        super(db, UsuarioEntity);
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const usuario = await this._db[this._entity].findOne({
            where: {
                id,
            },
        });

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
        const usuarios = [{ id: 1, nombre: `sergio1a ${filters}` }, { id: 2, nombre: 'sergio2' }, { id: 3, nombre: 'sergio3' }];
        return {
            data: usuarios,
            //status: (usuarios.length > 0) ? true : false,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(params) {
        const usuario = { id: 4, nombre: `sergio1a ${params}` };
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
        const usuario = { id: 4, nombre: `sergio1a ${params}` };
        return {
            data: usuario,
            status: usuario !== null,
        };
    }
}

module.exports = UsuarioRepository;