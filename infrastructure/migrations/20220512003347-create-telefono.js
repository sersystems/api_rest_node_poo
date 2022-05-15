module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('telefonos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usuarioId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Usuarios',
                    key: 'id',
                },
                allowNull: true,
                onDelete: 'CASCADE',
            },
            numero: {
                type: Sequelize.STRING(15),
                allowNull: true,
                validate: {
                    is: {
                        args: ['[0-9]+', '+'],
                        msg: 'El teléfono debe ser válido.',
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
        await queryInterface.dropTable('telefonos');
    },
};