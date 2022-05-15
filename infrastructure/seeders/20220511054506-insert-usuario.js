module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert('Usuarios', [
			{
				nombre: 'john1',
				apellido: 'doe1',
				email: 'john1@doe.com',
				password: '123456',
			},
			{
				nombre: 'john2',
				apellido: 'doe2',
				email: 'john2@doe.com',
				password: '654321',
			},
			{
				nombre: 'john3',
				apellido: 'doe3',
				email: 'john3@doe.com',
				password: '123123',
			},
		], {});
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Usuarios', null, {});

	},
};