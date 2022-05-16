class Server {

    constructor() {
        this.express     = require('express');
        this.api         = this.express();
        this.container   = require('./container').getContainer();
        this.cors        = require('cors');
        this.bodyParser  = require('body-parser');
        this.compression = require('compression');
        require('dotenv').config();
    }

    setPort() {
        this.api.set('port', process.env.PORT || 3000);
    }

    setMiddleware() {
        this.api.use(this.bodyParser.json({ limit: '5mb' }));
        this.api.use(this.bodyParser.urlencoded({ extended: true }));
        this.api.use(this.cors());
        this.api.use(this.compression());
    }

    setRoutes() {
        this.api.use('/api/auth', this.container.resolve('AuthController').getRoutes(this.express.Router()));
        this.api.use('/api/telefono', this.container.resolve('TelefonoController').getRoutes(this.express.Router()));
        this.api.use('/api/usuario', this.container.resolve('UsuarioController').getRoutes(this.express.Router()));
    }

    initServer() {
        this.setPort();
        this.setMiddleware();
        this.setRoutes();
        this.api.listen(this.api.get('port'), () => {
            console.log(`Server listening at ${process.env.BASE_URL || 'http://localhost'}:${process.env.PORT || 3000}/api`);
        });
    }
}

module.exports = Server;