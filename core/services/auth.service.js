class AuthService {

    // Propiedad privada
    #repository;

    constructor({ AuthRepository }) {
        this.#repository = AuthRepository;
    }

    /**
     * @param {Object} body
     * @returns {Object}
     */
    async signIn(body) {
        const usuario = (body.email && body.password) ? await this.#repository.signInByEmailPassword(body.email, body.password) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }

    /**
     * @param {Object} body
     * @returns {Object}
     */
    async signUp(body) {
        const usuario = (body.email && body.password) ? await this.#repository.signInByEmailPassword(body.email, body.password) : null;

        return {
            data: usuario,
            status: usuario !== null,
        };
    }

    #validar() {

    }
}

module.exports = AuthService;