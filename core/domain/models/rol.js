const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Rol extends Model {
        static associate(models) {
            Rol.hasMany(models.Usuario, {
                foreignKey: 'rolId',
                as: 'usuarios',
            });
        }
    }

    Rol.init(
        {
            denominacion: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Rol',
        },
    );

    return Rol;
};