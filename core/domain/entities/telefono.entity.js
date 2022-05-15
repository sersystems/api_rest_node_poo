class TelefonoEntity {

    // Propiedades privadas
    #id;
    #usuarioId;
    #numero;

    constructor(id, usuarioId, numero) {
        this.id        = id;
        this.usuarioId = usuarioId;
        this.numero    = numero;
    }

    // Métodos getter
    getId() { return this.id; }
    getUsuarioId() { return this.usuarioId; }
    getANumero() { return this.numero; }

    // Métodos getter
    setUsuarioId(usuarioId) { this.usuarioId = usuarioId; }
    setANumero(numero) { this.numero = numero; }
}

module.exports = TelefonoEntity;