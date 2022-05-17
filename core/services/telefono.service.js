const Service = require('./service');

class TelefonoService extends Service {

    constructor({ TelefonoRepository }) {
        super(TelefonoRepository);
    }
}

module.exports = TelefonoService;