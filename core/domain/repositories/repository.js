/*eslint no-unused-vars: "off"*/

class Repository {

    // Propiedades protegidas
    _db;

    constructor(db, model) {
        this._db = db[model];
    }

    // Métodos abstractos
    async getById(id) { throw new Error('Tienes que implementar el método getById.'); }
    async getAll(filters) { throw new Error('Tienes que implementar el método getAll.'); }
    async create(body) { throw new Error('Tienes que implementar el método create.'); }
    async delete(id) { throw new Error('Tienes que implementar el método delete.'); }
    async modify(id, body) { throw new Error('Tienes que implementar el método modify.'); }
}

module.exports = Repository;