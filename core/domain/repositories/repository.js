/*eslint no-unused-vars: "off"*/

class Repository {

    // Propiedades protegidas
    _db;
    _entity;

    constructor(db, entity) {
        this._db     = db;
        this._entity = entity;
    }

    // Métodos abstractos
    async getById(id) { throw new Error('Tienes que implementar el método getById.'); }
    async getAll(filters) { throw new Error('Tienes que implementar el método getAll.'); }
    async create(params) { throw new Error('Tienes que implementar el método create.'); }
    async delete(id) { throw new Error('Tienes que implementar el método delete.'); }
    async modify(params) { throw new Error('Tienes que implementar el método modify.'); }
}

module.exports = Repository;