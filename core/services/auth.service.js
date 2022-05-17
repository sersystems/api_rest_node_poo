const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

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
    async login(body) {
        const { email, password } = body;

        // Consulta la BD en busca de un usuario que coincida con el email y password recibido.
        const usuario      = (email && password) ? await this.#repository.loginByEmailPassword(email) : null;
        const passwordHash = (usuario) ? usuario.password : null;

        // Crea un token personalizado.
        const token = jwt.sign(
            { id: usuario.id, password: usuario.password },
            (process.env.TOKEN_SECRET || 'U2VyZ2lvUmVnYWxhZG9BbGVzc2kyMDIy'),
            { expiresIn: (process.env.TOKEN_EXPIRE || '1h') },
        );

        // Comprueba que el password recibido coincida con el password hash almacenado en la BD.
        const comparation = await bcrypt.compare(password, passwordHash).then((res) => res);

        return {
            status: comparation,
            token,
        };
    }

    /**
     * Autentifica las credenciales de un usuario a partir del token almacenado en el header[authorization].
     *
     * @param {Object} req
     * @param {Object} res
     * @param {Object} next
     * @returns {Object}
     */
    verifyToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token      = authHeader && authHeader.split(' ')[1];

        try {
            if (!token) {
                res.status(403).json({
                    status: false,
                    msg: 'API: Acceso denegado. Está intentando acceder sin autentiticación.',
                });
            }

            const verified = jwt.verify(token, (process.env.TOKEN_SECRET || 'U2VyZ2lvUmVnYWxhZG9BbGVzc2kyMDIy'));

            if (verified) {
                req.usuario = verified;
                next();
            }
        } catch (error) {
            res.status(400).json({
                status: false,
                msg: 'API: Acceso denegado. Está intentando acceder con un token inválido.',
            });
        }
    }

    /**
     * Obtiene un hash a partir de un password recibido.
     *
     * @param {String} password
     * @returns {String}
     */
    async getHash(password) {
        const hash = await bcrypt.hashSync(password, 8);
        return hash;
    }
}

module.exports = AuthService;