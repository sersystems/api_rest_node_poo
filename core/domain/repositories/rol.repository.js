const Repository = require('./repository');

class RolRepository extends Repository {

    constructor({ db }) {
        super(db, 'Rol');
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async getById(id) {
        const rol = await this._db.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        })
        .then((data) => data);

        return rol;
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters = {}) {
        const rols = await this._db.findAll({
            where: filters,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        })
        .then((data) => data);

        return rols;
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const rol = await this._db.create(body).then((data) => data);

        return rol;
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
        const rol = await this._db.update(body, {
            where: {
                id,
            },
        })
        .then((data) => data);

        return rol;
    }
}

module.exports = RolRepository;