const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Telefono extends Model {
        static associate(models) {
            Telefono.belongsTo(models.Usuario, {
                foreignKey: 'usuarioId',
                as: 'usuario',
            });
        }
    }

    Telefono.init(
        {
            usuarioid: DataTypes.INTEGER,
            numero: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Telefono',
        },
    );

    return Telefono;
};