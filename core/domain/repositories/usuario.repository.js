const Repository = require('./repository');

class UsuarioRepository extends Repository {

    constructor({ db, UsuarioEntity }) {
        super(db, UsuarioEntity);
    }

    /**
     * @param {Number} id
     * @returns {UsuarioEntity}
     */
    async getById(id) {
        const usuario = this._entity;
        usuario.id = id;
        return usuario;
    }

    /**
     * @returns {Array}
     */
    async getAll(filters) {
        const usuarios = [this._entity, this._entity, this._entity];
        return usuarios + filters;
    }

    /**
     * @param {UsuarioEntity} usuario
     * @returns {UsuarioEntity}
     */
    async create(params) {
        const usuario = this._entity;
        usuario.id = params.id || 1;
        usuario.usuario_id = 1;
        usuario.numero = 1;
        return usuario;
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
     * @param {UsuarioEntity} usuario
     * @returns {UsuarioEntity}
     */
    async modify(params) {
        //const usuario = await this._repository.modify(pUsuario);
        return params;
    }
}

module.exports = UsuarioRepository;