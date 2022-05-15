const Service = require('./service');

class UsuarioService extends Service {

    constructor(UsuarioRepository) {
        super(UsuarioRepository);
    }

    /**
     * @param {Number} id
     * @returns {UsuarioEntity}
     */
    async getById(id) {
        const usuario = await this.repository.getById(id);
        return usuario;
    }

    /**
     * @returns {Array}
     */
    async getAll(filters) {
        const usuarios = await this.repository.getAll();
        return usuarios + filters;
    }

    /**
     * @param {UsuarioEntity} usuario
     * @returns {UsuarioEntity}
     */
    async create(params) {
        const usuario = await this.repository.create(params);
        return usuario;
    }

    /**
     * @param {Number} id
     * @returns {Boolean}
     */
    async delete(id) {
        return id;// await this._repository.delete(usuario);
    }

    /**
     * @param {UsuarioEntity} usuario
     * @returns {UsuarioEntity}
     */
    async modify(params) {
        const usuario = await this.repository.modify(params);
        return usuario;
    }
}

module.exports = UsuarioService;