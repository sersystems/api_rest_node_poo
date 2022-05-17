module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Rols', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            denominacion: {
                type: Sequelize.STRING(15),
                allowNull: false,
                validate: {
                    isUppercase: {
                        msg: 'La denominación debe estar en mayúsculas.',
                    },
                },
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Rols');
    },
};