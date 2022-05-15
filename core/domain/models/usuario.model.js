const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class UsuarioModel extends Model {
        static associate(models) {
            UsuarioModel.hasMany(models.TelefonoModel, {
                foreignKey: 'usuarioId',
            });
        }
    }

    UsuarioModel.init(
        {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            email: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                //set(value) { this.setDataValue('password', hash(value)); },
            },
        },
        {
            sequelize,
            modelName: 'UsuarioModel',
        },
    );

    return UsuarioModel;
};