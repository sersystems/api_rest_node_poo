/*eslint no-unused-vars: "off"*/

class Controller {

    // Propiedad protegida
    _service;

    constructor(service) {
        this._service = service;
    }

    // Método abstracto
    async getEndpoints(router) { throw new Error('Tienes que implementar el método getEndpoints.'); }
}

module.exports = Controller;