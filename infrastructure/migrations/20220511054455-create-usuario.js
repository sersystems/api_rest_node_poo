module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuarios', {
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
                type: Sequelize.STRING(15),
                allowNull: false,
                validate: {
                    len: {
                        args: [8, 15],
                        msg: 'La contraseña debe tener entre 8 y 15 caracteres.',
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
        await queryInterface.dropTable('usuarios');
    },
};