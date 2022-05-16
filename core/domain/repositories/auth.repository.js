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
     async signInByEmailPassword(email) {
        const usuario = await this.#db.findOne({
            where: {
                email,
            },
            attributes: {
                include: ['id', 'nombre', 'password'],
            },
        })
        .then((data) => data);

        return usuario;
    }
}

module.exports = AuthRepository;