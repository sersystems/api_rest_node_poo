class Service {

    // Propiedad protegida
    _repository;

    constructor(repository) {
        this._repository = repository;
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
     async getById(id) {
        const model = (id && id > 0) ? await this._repository.getById(id) : null;

        return {
            data: model,
            status: model !== null,
        };
    }

    /**
     * @param {Object} filters
     * @returns {Object}
     */
    async getAll(filters) {
        const models = await this._repository.getAll(filters);

        return {
            data: models,
            status: models !== null,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async create(body) {
        const model = (body) ? await this._repository.create(body) : null;

        return {
            data: model,
            status: model !== null,
        };
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
    async delete(id) {
        const result = (id) ? await this._repository.delete(id) : null;

        return {
            status: result,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
    async modify(id, body) {
        const model = (id && id > 0 && body) ? await this._repository.modify(id, body) : null;

        return {
            data: model,
            status: model !== null,
        };
    }
}

module.exports = Service;