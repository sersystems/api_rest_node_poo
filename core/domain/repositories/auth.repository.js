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
     async signInByEmailPassword(email, password) {
        const auth = await this.#db.findOne({
            where: {
                email,
                password,
            },
            attributes: {
                include: ['id', 'nombre'],
            },
        })
        .then((data) => data);

        return auth;
    }
}

module.exports = AuthRepository;