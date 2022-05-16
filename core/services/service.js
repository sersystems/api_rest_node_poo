/*eslint no-unused-vars: "off"*/

class Service {

    // Propiedad protegida
    _repository;

    constructor(repository) {
        this._repository = repository;
    }

    // Métodos abstractos
    async getById(id) { throw new Error('Tienes que implementar el método getById.'); }
    async getAll(filters) { throw new Error('Tienes que implementar el método getAll.'); }
    async create(body) { throw new Error('Tienes que implementar el método create.'); }
    async delete(id) { throw new Error('Tienes que implementar el método delete.'); }
    async modify(id, body) { throw new Error('Tienes que implementar el método modify.'); }
}

module.exports = Service;