const Repository = require('./repository');

class UsuarioRepository extends Repository {

    constructor({ db }) {
        super(db, 'Usuario');
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const usuario = await this._db.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: ['telefonos'],
        })
        .then((data) => data);

        return usuario;
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters = {}) {
        const usuarios = await this._db.findAll({
            where: filters,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: ['telefonos'],
        })
        .then((data) => data);

        return usuarios;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const usuario = await this._db.create(body).then((data) => data);

        return usuario;
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async delete(id) {
        const done = await this._db.destroy({
            where: {
                id,
            },
        });

        return done;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(id, body) {
        const usuario = await this._db.update(body, {
            where: {
                id,
            },
        })
        .then((data) => data);

        return usuario;
    }
}

module.exports = UsuarioRepository;