class UsuarioEntity {

    // Propiedades privadas
    #id;
    #nombre;
    #apellido;
    #email;
    #password;
    #telefonos;

    constructor(id, nombre, apellido, email, password, Telefonos = []) {
        this.id        = id;
        this.nombre    = nombre;
        this.apellido  = apellido;
        this.email     = email;
        this.password  = password;
        this.telefonos = Telefonos;
    }

    // Métodos getter
    getId() { return this.id; }
    getNombre() { return this.nombre; }
    getApellido() { return this.apellido; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getTelefonos() { return this.telefonos; }

    // Métodos getter
    setNombre(nombre) { this.nombre = nombre; }
    setApellido(apellido) { this.apellido = apellido; }
    setEmail(email) { this.email = email; }
    setPassword(password) { this.password = password; }
    setTelefonos(telefonos = []) { this.telefonos = telefonos; }
}

module.exports = UsuarioEntity;