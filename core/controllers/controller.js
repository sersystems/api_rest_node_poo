/*eslint no-unused-vars: "off"*/

class Controller {

    // Propiedad protegida
    _auth;
    _service;

    constructor(auth, service) {
        this._auth    = auth;
        this._service = service;
    }

    // Método abstracto
    async getRoutes(router) { throw new Error('Tienes que implementar el método getRoutes.'); }
}

module.exports = Controller;