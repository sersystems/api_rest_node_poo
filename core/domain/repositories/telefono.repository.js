const Repository = require('./repository');

class TelefonoRepository extends Repository {

    constructor({ db }) {
        super(db, 'Telefono');
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const telefono = await this._db.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: ['usuario'],
        })
        .then((data) => data);

        return telefono;
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters = {}) {
        const telefonos = await this._db.findAll({
            where: filters,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: ['usuario'],
        })
        .then((data) => data);

        return telefonos;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const telefono = await this._db.create(body).then((data) => data);

        return telefono;
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
        const telefono = await this._db.update(body, {
            where: {
                id,
            },
        })
        .then((data) => data);

        return telefono;
    }
}

module.exports = TelefonoRepository;