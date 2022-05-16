const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Usuario extends Model {
        static associate(models) {
            Usuario.hasMany(models.Telefono, {
                foreignKey: 'usuarioId',
                as: 'telefonos',
            });
        }
    }

    Usuario.init(
        {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Usuario',
        },
    );

    return Usuario;
};