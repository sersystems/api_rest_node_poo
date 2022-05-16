class AuthService {

    // Propiedades privadas
    #bcrypt;
    #jwt;
    #repository;

    constructor({ Bcrypt, JWT, AuthRepository }) {
        this.#bcrypt = Bcrypt;
        this.#jwt = JWT;
        this.#repository = AuthRepository;
    }

    /**
     * @param {Object} body
     * @returns {Object}
     */
    async signIn(body) {
        const { email, password } = body;

        const usuario      = (email && password) ? await this.#repository.signInByEmailPassword(email) : null;
        const passwordHash = (usuario) ? usuario.password : null;
        const auth         = await this.compareHash(password, passwordHash);
        const token        = await this.encodeToken(usuario.id, usuario.nombre);

        const Credential  = await this.decodeToken(token);
        console.log(Credential);

        return {
            data: token,
            status: auth,
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

    async encodeToken(id, nombre) {
        const token = await this.#jwt.sign(
            {
                id,
                nombre,
            },
            process.env.TOKEN_PRIVATE_KEY || '4zeYcXDuLPbe2jcH23IixDFEZMbdxi',
            {
                expiresIn: process.env.TOKEN_EXPIRE || '1h',
            },
        );

        return token;
    }

    async decodeToken(token) {
        const credential = await this.#jwt.sign(token, process.env.TOKEN_PRIVATE_KEY || '4zeYcXDuLPbe2jcH23IixDFEZMbdxi');
        return credential;
    }

    async getHash(password) {
        const hash = await this.#bcrypt.hashSync(password, 8);
        return hash;
    }

    async compareHash(password, passwordHash) {
        const comparation = await this.#bcrypt.compare(password, passwordHash).then((res) => res);
        return comparation;
    }
}

module.exports = AuthService;