const Service = require('./service');

class RolService extends Service {

    constructor({ RolRepository }) {
        super(RolRepository);
    }
}

module.exports = RolService;