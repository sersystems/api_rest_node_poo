module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Usuarios', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: Sequelize.STRING(25),
                allowNull: false,
                validate: {
                    isUppercase: {
                        msg: 'El nombre debe estar en mayúsculas.',
                    },
                },
            },
            apellido: {
                type: Sequelize.STRING(25),
                allowNull: false,
                validate: {
                    isUppercase: {
                        msg: 'El apellido debe estar en mayúsculas.',
                    },
                },
            },
            email: {
                type: Sequelize.STRING(70),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: 'El email debe ser válido.',
                    },
                    isLowercase: {
                        msg: 'El email debe estar en minúsculas.',
                    },
                },
            },
            password: {
                type: Sequelize.STRING(60),
                allowNull: false,
            },
            rolId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Rols',
                    key: 'id',
                },
                allowNull: false,
                onDelete: 'RESTRICT',
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
        await queryInterface.dropTable('Usuarios');
    },
};