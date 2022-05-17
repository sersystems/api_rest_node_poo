const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Usuario extends Model {
        static associate(models) {
            Usuario.hasMany(models.Telefono, {
                foreignKey: 'usuarioId',
                as: 'telefonos',
            });
            Usuario.belongsTo(models.Rol, {
                foreignKey: 'rolId',
                as: 'rol',
            });
        }
    }

    Usuario.init(
        {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            rolId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Usuario',
        },
    );

    return Usuario;
};