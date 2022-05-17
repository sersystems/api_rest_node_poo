class AuthRepository {

    // Propiedades privada
    #db;

    constructor({ db }) {
        this.#db = db['Usuario'];
    }

    /**
     * @param {Number} id
     * @returns {Object}
     */
     async loginByEmailPassword(email) {
        const usuario = await this.#db.findOne({
            where: {
                email,
            },
            attributes: ['id', 'password'],
        })
        .then((data) => data);

        return usuario;
    }
}

module.exports = AuthRepository;