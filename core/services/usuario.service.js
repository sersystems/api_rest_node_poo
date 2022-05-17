/* eslint-disable no-param-reassign */

const Service = require('./service');

class UsuarioService extends Service {

    constructor({ UsuarioRepository }) {
        super(UsuarioRepository);
    }

    /**
     * @param {String} email
     * @returns {Object}
     */
    async getByEmail(email) {
        const usuario = (this.checkEmail(email)) ? await this._repository.getByEmail(email) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }

    /**
     * @param {String} email
     * @returns {Boolean}
     */
     async getRolByToken(token) {

        return {
            status: token,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
     async create(body) {
        body.password = (body.password) ? await this._auth.getHash(body.password) : null;
        const model   = (body && this.checkEmail(body.email)) ? await this._repository.create(body) : null;

        return {
            data: model,
            status: model !== null,
        };
    }

    /**
     * @param {Object} params
     * @returns {Object}
     */
     async modify(id, body) {
        body.password = (body.password) ? await this._auth.getHash(body.password) : null;
        const model   = (id && id > 0 && body && this.checkEmail(body.email)) ? await this._repository.modify(id, body) : null;

        return {
            data: model,
            status: model !== null,
        };
    }

    /**
     * @param {String} email
     * @returns {Boolean}
     */
     checkEmail(email) {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const emailValid = emailRegex.test(email);
        return emailValid;
    }
}

module.exports = UsuarioService;