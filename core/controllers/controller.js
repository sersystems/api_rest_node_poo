/*eslint no-unused-vars: "off"*/

class Controller {

    // Propiedad protegida
    _service;

    constructor(service) {
        this._service = service;
    }

    // Método abstracto
    async getRoutes(router) { throw new Error('Tienes que implementar el método getRoutes.'); }
}

module.exports = Controller;