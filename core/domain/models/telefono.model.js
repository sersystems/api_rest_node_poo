const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class TelefonoModel extends Model {
        static associate(models) {
            TelefonoModel.belongsTo(models.UsuarioModel, {
                foreignKey: 'usuarioId',
            });
        }
    }

    TelefonoModel.init(
        {
            usuario_id: DataTypes.STRING,
            numero: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'TelefonoModel',
        },
    );

    return TelefonoModel;
};