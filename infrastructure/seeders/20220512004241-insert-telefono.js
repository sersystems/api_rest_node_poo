/*eslint linebreak-style: ['off', 'windows']*/

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert('Telefonos', [
			{
				usuarioId: '1',
				numero: '2645887755',
			},
			{
				usuarioId: '1',
				numero: '2645448745',
			},
			{
				usuarioId: '2',
				numero: '4257788',
			},
		], {});
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Telefonos', null, {});

	},
};